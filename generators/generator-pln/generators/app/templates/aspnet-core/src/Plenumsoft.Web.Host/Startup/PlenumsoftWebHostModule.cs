using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using <%= projectName %>.Configuration;

namespace <%= projectName %>.Web.Host.Startup
{
    [DependsOn(
       typeof(<%= projectName %>WebCoreModule))]
    public class <%= projectName %>WebHostModule: AbpModule
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public <%= projectName %>WebHostModule(IHostingEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(<%= projectName %>WebHostModule).GetAssembly());
        }
    }
}
