using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace <%= projectName %>.Localization
{
    public static class <%= projectName %>LocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(<%= projectName %>Consts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(<%= projectName %>LocalizationConfigurer).GetAssembly(),
                        "<%= projectName %>.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
