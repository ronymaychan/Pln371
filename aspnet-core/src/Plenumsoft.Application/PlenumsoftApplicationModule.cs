using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Plenumsoft.Authorization;

namespace Plenumsoft
{
    [DependsOn(
        typeof(PlenumsoftCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class PlenumsoftApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<PlenumsoftAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(PlenumsoftApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg =>
                {
                    cfg.AddProfiles(thisAssembly);
                    cfg.CreateMap<States.Dto.StateCreateDto, Domain.State>().ForMember(x => x.Country, opt => opt.Ignore());
                    cfg.CreateMap<Cities.Dto.CityCreateDto, Domain.City>().ForMember(x => x.State, opt => opt.Ignore());
                }
            );

        }
    }
}
