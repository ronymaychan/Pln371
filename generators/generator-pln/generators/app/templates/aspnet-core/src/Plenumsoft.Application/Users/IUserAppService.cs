using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using <%= projectName %>.Roles.Dto;
using <%= projectName %>.Users.Dto;

namespace <%= projectName %>.Users
{
    public interface IUserAppService : IAsyncCrudAppService<UserDto, long, PagedResultRequestDto, CreateUserDto, UserDto>
    {
        Task<ListResultDto<RoleDto>> GetRoles();

        Task ChangeLanguage(ChangeUserLanguageDto input);
    }
}
