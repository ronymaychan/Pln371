using System.Threading.Tasks;
using Abp.Application.Services;
using Plenumsoft.Sessions.Dto;

namespace Plenumsoft.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
