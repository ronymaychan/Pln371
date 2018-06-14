using System.Threading.Tasks;
using Abp.Application.Services;
using <%= projectName %>.Sessions.Dto;

namespace <%= projectName %>.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
