using System;
using System.Collections.Generic;
using System.Text;
using System.Reflection;
using System.IO;
using System.Globalization;

namespace Plenumsoft.Helpers
{
    public static class FluentTemplate
    {
        public static string TemplateFromString<T>(string template, T model)
        {
            var result = Parse(template, model);

            return result;
        }

        public static string CultureTemplateFromFile<T>(string fileName, T model, CultureInfo culture) {

            var cultureFile = GetCultureFileName(fileName, culture);
            return TemplateFromFile(cultureFile, model);
        }

        public static string TemplateFromFile<T>(string fileName, T model)
        {

            var template = "";

            using (var reader = new StreamReader(File.OpenRead(fileName)))
            {
                template = reader.ReadToEnd();
            }

            var result = Parse(template, model);

            return result;
        }

        private static string Parse<T>(string template, T model) {

            foreach (PropertyInfo pi in model.GetType().GetRuntimeProperties())
            {
                template = template.Replace($"##{pi.Name}##", pi.GetValue(model, null).ToString());
            }

            return template;
        }

        private static string GetCultureFileName(string fileName, CultureInfo culture)
        {
            var extension = Path.GetExtension(fileName);
            var cultureExtension = string.Format("{0}{1}", culture.Name, extension);

            var cultureFile = Path.ChangeExtension(fileName, cultureExtension);
            if (File.Exists(cultureFile))
                return cultureFile;
            else
                return fileName;
        }
    }
}
