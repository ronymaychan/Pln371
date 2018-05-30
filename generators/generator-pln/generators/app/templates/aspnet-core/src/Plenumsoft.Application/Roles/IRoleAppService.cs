using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using <%= projectName %>.Roles.Dto;

namespace <%= projectName %>.Roles
{
    public interface IRoleAppService : IAsyncCrudAppService<RoleDto, int, PagedResultRequestDto, CreateRoleDto, RoleDto>
    {
        Task<ListResultDto<PermissionDto>> GetAllPermissions();
    }
}
