using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace <%= projectName %>.Controllers
{
    public abstract class <%= projectName %>ControllerBase: AbpController
    {
        protected <%= projectName %>ControllerBase()
        {
            LocalizationSourceName = <%= projectName %>Consts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
