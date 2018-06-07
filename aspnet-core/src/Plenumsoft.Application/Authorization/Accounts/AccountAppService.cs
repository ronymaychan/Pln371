using System.Linq;
using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Configuration;
using Abp.IdentityFramework;
using Abp.Net.Mail.Smtp;
using Abp.Zero.Configuration;
using Plenumsoft.Authorization.Accounts.Dto;
using Plenumsoft.Authorization.Users;
using Plenumsoft.Web;

namespace Plenumsoft.Authorization.Accounts
{
    public class AccountAppService : PlenumsoftAppServiceBase, IAccountAppService
    {
        private readonly UserRegistrationManager _userRegistrationManager;
        private readonly UserManager _userManager;
        private readonly ISmtpEmailSender _smtpEmailSender;


        public AccountAppService(
            UserRegistrationManager userRegistrationManager,
            UserManager userManager,
            ISmtpEmailSender smtpEmailSender)
        {
            _userRegistrationManager = userRegistrationManager;
            _userManager = userManager;
            _smtpEmailSender = smtpEmailSender;

            LocalizationSourceName = PlenumsoftConsts.LocalizationSourceName;
        }

        [AbpAllowAnonymous]
        public string Demo()
        {
            var inforDir = WebContentDirectoryFinder.CalculateContentRootFolder();
            
            return L("HomePage");
        }

        public async Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input)
        {
            var tenant = await TenantManager.FindByTenancyNameAsync(input.TenancyName);
            if (tenant == null)
            {
                return new IsTenantAvailableOutput(TenantAvailabilityState.NotFound);
            }

            if (!tenant.IsActive)
            {
                return new IsTenantAvailableOutput(TenantAvailabilityState.InActive);
            }

            return new IsTenantAvailableOutput(TenantAvailabilityState.Available, tenant.Id);
        }

        public async Task<RegisterOutput> Register(RegisterInput input)
        {
            var user = await _userRegistrationManager.RegisterAsync(
                input.Name,
                input.Surname,
                input.EmailAddress,
                input.UserName,
                input.Password,
                true // Assumed email address is always confirmed. Change this if you want to implement email confirmation.
            );

            var isEmailConfirmationRequiredForLogin = await SettingManager.GetSettingValueAsync<bool>(AbpZeroSettingNames.UserManagement.IsEmailConfirmationRequiredForLogin);

            return new RegisterOutput
            {
                CanLogin = user.IsActive && (user.IsEmailConfirmed || !isEmailConfirmationRequiredForLogin)
            };
        }

        [AbpAllowAnonymous]
        public async Task ForgotPassword(ForgotPasswordDto input)
        {
            var user = await _userManager.FindByEmailAsync(input.Email);

            if (user == null || !(await _userManager.IsEmailConfirmedAsync(user)))
                throw new Abp.UI.UserFriendlyException(L("EmailIsNotValidMessage"));

            var clientAddress = SettingManager.GetSettingValue(Configuration.AppSettingNames.ClientRootAddress);


            var resetCode = await _userManager.GeneratePasswordResetTokenAsync(user);
            resetCode = System.Web.HttpUtility.UrlEncode(resetCode);

            var callbackUrl = string.Format("{0}account/resetpassword?userId={1}&resetCode={2}", clientAddress, user.Id, resetCode);

            _smtpEmailSender.Send(
                to: user.EmailAddress,
                subject: "Plenumsoft: password reset!",
                body: string.Format("This email is sent you to reset and re-create your password. <br/> <br/> Please click the link below to reset your password: <br/> <br/> {0}", callbackUrl),
                isBodyHtml: true);
        }

        [AbpAllowAnonymous]
        public async Task ResetPassword(ResetPasswordDto input)
        {
            var user = _userManager.Users.FirstOrDefault(x => x.Id == input.UserId);

            if (user == null)
                throw new Abp.UI.UserFriendlyException(L("UserIsNotValidMessage"));

            await this._userManager.InitializeOptionsAsync(null);

            var result = await _userManager.ResetPasswordAsync(user, input.ResetCode, input.Password);

            if (!result.Succeeded)
                throw new Abp.UI.UserFriendlyException(L("ResetPassword"), L("ResetPasswordFail"));
        }
    }
}
