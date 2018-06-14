using System.Threading.Tasks;
using <%= projectName %>.Configuration.Dto;

namespace <%= projectName %>.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
