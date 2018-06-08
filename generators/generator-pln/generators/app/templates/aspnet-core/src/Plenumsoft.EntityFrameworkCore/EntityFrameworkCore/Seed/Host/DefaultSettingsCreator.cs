using System.Linq;
using Microsoft.EntityFrameworkCore;
using Abp.Configuration;
using Abp.Localization;
using Abp.Net.Mail;
using Abp.Zero.Configuration;

namespace <%= projectName %>.EntityFrameworkCore.Seed.Host
{
    public class DefaultSettingsCreator
    {
        private readonly <%= projectName %>DbContext _context;

        public DefaultSettingsCreator(<%= projectName %>DbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            // Emailing
            AddSettingIfNotExists(EmailSettingNames.DefaultFromAddress, "admin@mydomain.com");
            AddSettingIfNotExists(EmailSettingNames.DefaultFromDisplayName, "<%= projectName %> mailer");

            // Languages
            AddSettingIfNotExists(LocalizationSettingNames.DefaultLanguage, "en");

            // PasswordComplexity
            /*AddSettingIfNotExists(AbpZeroSettingNames.UserManagement.PasswordComplexity.RequireDigit, "false");
            AddSettingIfNotExists(AbpZeroSettingNames.UserManagement.PasswordComplexity.RequireLowercase, "false");
            AddSettingIfNotExists(AbpZeroSettingNames.UserManagement.PasswordComplexity.RequireNonAlphanumeric, "false");
            AddSettingIfNotExists(AbpZeroSettingNames.UserManagement.PasswordComplexity.RequireUppercase, "false");
            AddSettingIfNotExists(AbpZeroSettingNames.UserManagement.PasswordComplexity.RequiredLength, "6");*/

            AddSettingIfNotExists(Configuration.AppSettingNames.ClientRootAddress, "http://localhost:4200/");
        }

        private void AddSettingIfNotExists(string name, string value, int? tenantId = null)
        {
            if (_context.Settings.IgnoreQueryFilters().Any(s => s.Name == name && s.TenantId == tenantId && s.UserId == null))
            {
                return;
            }

            _context.Settings.Add(new Setting(tenantId, null, name, value));
            _context.SaveChanges();
        }
    }
}
