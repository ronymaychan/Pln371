using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Plenumsoft.Configuration;

namespace Plenumsoft.Web.Host.Startup
{
    [DependsOn(
       typeof(PlenumsoftWebCoreModule))]
    public class PlenumsoftWebHostModule: AbpModule
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public PlenumsoftWebHostModule(IHostingEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(PlenumsoftWebHostModule).GetAssembly());
        }
    }
}
