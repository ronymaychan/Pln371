using Abp.Application.Services;
using Abp.Application.Services.Dto;
using <%= projectName %>.MultiTenancy.Dto;

namespace <%= projectName %>.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}
