using Abp.Authorization;
using Abp.Localization;
using Abp.MultiTenancy;

namespace Plenumsoft.Authorization
{
    public class PlenumsoftAuthorizationProvider : AuthorizationProvider
    {
        public override void SetPermissions(IPermissionDefinitionContext context)
        {
            context.CreatePermission(PermissionNames.Pages_Users, L("Users"));
            context.CreatePermission(PermissionNames.Pages_Roles, L("Roles"));
            context.CreatePermission(PermissionNames.Pages_Tenants, L("Tenants"), multiTenancySides: MultiTenancySides.Host);

            context.CreatePermission(PermissionNames.Pages_Countries, L("Countries"));
            context.CreatePermission(PermissionNames.Pages_States, L("States"));
            context.CreatePermission(PermissionNames.Pages_Cities, L("Cities"));
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, PlenumsoftConsts.LocalizationSourceName);
        }
    }
}
