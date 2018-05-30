using Microsoft.AspNetCore.Antiforgery;
using <%= projectName %>.Controllers;

namespace <%= projectName %>.Web.Host.Controllers
{
    public class AntiForgeryController : <%= projectName %>ControllerBase
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
