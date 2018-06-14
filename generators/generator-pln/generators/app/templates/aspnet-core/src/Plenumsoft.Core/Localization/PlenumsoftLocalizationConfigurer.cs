using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace Plenumsoft.Localization
{
    public static class PlenumsoftLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(PlenumsoftConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(PlenumsoftLocalizationConfigurer).GetAssembly(),
                        "Plenumsoft.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
