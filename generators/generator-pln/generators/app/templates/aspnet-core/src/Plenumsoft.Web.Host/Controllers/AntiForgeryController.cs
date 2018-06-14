using Microsoft.AspNetCore.Antiforgery;
using Plenumsoft.Controllers;

namespace Plenumsoft.Web.Host.Controllers
{
    public class AntiForgeryController : PlenumsoftControllerBase
    {
        private readonly IAntiforgery _antiforgery;

        public AntiForgeryController(IAntiforgery antiforgery)
        {
            _antiforgery = antiforgery;
        }

        public void GetToken()
        {
            _antiforgery.SetCookieTokenAndHeader(HttpContext);
        }
    }
}
