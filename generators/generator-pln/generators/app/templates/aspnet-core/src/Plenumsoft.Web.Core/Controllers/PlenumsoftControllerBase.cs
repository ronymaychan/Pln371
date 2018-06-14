using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace Plenumsoft.Controllers
{
    public abstract class PlenumsoftControllerBase: AbpController
    {
        protected PlenumsoftControllerBase()
        {
            LocalizationSourceName = PlenumsoftConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
