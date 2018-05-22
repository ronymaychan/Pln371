using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using Plenumsoft.Configuration.Dto;

namespace Plenumsoft.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : PlenumsoftAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
