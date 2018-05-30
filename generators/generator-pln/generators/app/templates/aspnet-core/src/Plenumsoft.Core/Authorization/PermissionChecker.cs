using Abp.Authorization;
using <%= projectName %>.Authorization.Roles;
using <%= projectName %>.Authorization.Users;

namespace <%= projectName %>.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
