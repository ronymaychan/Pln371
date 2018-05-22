using System.Threading.Tasks;
using Abp.Application.Services;
using Plenumsoft.Authorization.Accounts.Dto;

namespace Plenumsoft.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
