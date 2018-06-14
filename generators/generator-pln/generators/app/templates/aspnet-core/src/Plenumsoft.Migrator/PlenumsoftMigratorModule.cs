using Microsoft.Extensions.Configuration;
using Castle.MicroKernel.Registration;
using Abp.Events.Bus;
using Abp.Modules;
using Abp.Reflection.Extensions;
using <%= projectName %>.Configuration;
using <%= projectName %>.EntityFrameworkCore;
using <%= projectName %>.Migrator.DependencyInjection;

namespace <%= projectName %>.Migrator
{
    [DependsOn(typeof(<%= projectName %>EntityFrameworkModule))]
    public class <%= projectName %>MigratorModule : AbpModule
    {
        private readonly IConfigurationRoot _appConfiguration;

        public <%= projectName %>MigratorModule(<%= projectName %>EntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbSeed = true;

            _appConfiguration = AppConfigurations.Get(
                typeof(<%= projectName %>MigratorModule).GetAssembly().GetDirectoryPathOrNull()
            );
        }

        public override void PreInitialize()
        {
            Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(
                <%= projectName %>Consts.ConnectionStringName
            );

            Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
            Configuration.ReplaceService(
                typeof(IEventBus), 
                () => IocManager.IocContainer.Register(
                    Component.For<IEventBus>().Instance(NullEventBus.Instance)
                )
            );
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(<%= projectName %>MigratorModule).GetAssembly());
            ServiceCollectionRegistrar.Register(IocManager);
        }
    }
}
