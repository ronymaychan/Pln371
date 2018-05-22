using Abp.Authorization;
using Plenumsoft.Authorization.Roles;
using Plenumsoft.Authorization.Users;

namespace Plenumsoft.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
