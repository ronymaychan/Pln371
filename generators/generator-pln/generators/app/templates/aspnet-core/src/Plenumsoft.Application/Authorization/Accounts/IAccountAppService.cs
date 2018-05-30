using System.Threading.Tasks;
using Abp.Application.Services;
using <%= projectName %>.Authorization.Accounts.Dto;

namespace <%= projectName %>.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
