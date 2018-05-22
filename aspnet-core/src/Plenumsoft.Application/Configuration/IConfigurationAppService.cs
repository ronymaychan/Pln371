using System.Threading.Tasks;
using Plenumsoft.Configuration.Dto;

namespace Plenumsoft.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
