using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Plenumsoft.Roles.Dto;
using Plenumsoft.Users.Dto;

namespace Plenumsoft.Users
{
    public interface IUserAppService : IAsyncCrudAppService<UserDto, long, PagedResultRequestDto, CreateUserDto, UserDto>
    {
        Task<ListResultDto<RoleDto>> GetRoles();

        Task ChangeLanguage(ChangeUserLanguageDto input);
    }
}
