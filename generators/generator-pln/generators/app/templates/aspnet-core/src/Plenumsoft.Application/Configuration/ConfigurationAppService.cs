using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using <%= projectName %>.Configuration.Dto;

namespace <%= projectName %>.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : <%= projectName %>AppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
