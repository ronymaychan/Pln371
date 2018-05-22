using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Plenumsoft.MultiTenancy.Dto;

namespace Plenumsoft.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}
