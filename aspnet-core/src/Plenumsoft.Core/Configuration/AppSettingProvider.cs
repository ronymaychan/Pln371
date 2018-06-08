using System.Collections.Generic;
using Abp.Configuration;
using Abp.Zero.Configuration;

namespace Plenumsoft.Configuration
{
    public class AppSettingProvider : SettingProvider
    {
        public override IEnumerable<SettingDefinition> GetSettingDefinitions(SettingDefinitionProviderContext context)
        {
            return new[]
            {
                new SettingDefinition(AppSettingNames.UiTheme, "red", scopes: SettingScopes.Application | SettingScopes.Tenant | SettingScopes.User, isVisibleToClients: true),

                 new SettingDefinition (Abp.Net.Mail.EmailSettingNames.DefaultFromAddress, "arquitectura.demo.pln@gmail.com", scopes: SettingScopes.All, isVisibleToClients: false),
                 new SettingDefinition (Abp.Net.Mail.EmailSettingNames.DefaultFromDisplayName, "arquitectura.demo.pl", scopes: SettingScopes.All, isVisibleToClients: false),
                 new SettingDefinition (Abp.Net.Mail.EmailSettingNames.Smtp.Host, "smtp.gmail.com", scopes: SettingScopes.All, isVisibleToClients: false),
                 new SettingDefinition (Abp.Net.Mail.EmailSettingNames.Smtp.Port, "587", scopes: SettingScopes.All, isVisibleToClients: false),
                 new SettingDefinition (Abp.Net.Mail.EmailSettingNames.Smtp.UserName, "arquitectura.demo.pln@gmail.com", scopes: SettingScopes.All, isVisibleToClients: false),
                 new SettingDefinition (Abp.Net.Mail.EmailSettingNames.Smtp.Password, "Plenumsoft00", scopes: SettingScopes.All, isVisibleToClients: false),
                 new SettingDefinition (Abp.Net.Mail.EmailSettingNames.Smtp.Domain, "", scopes: SettingScopes.All, isVisibleToClients: false),
                 new SettingDefinition (Abp.Net.Mail.EmailSettingNames.Smtp.EnableSsl, "true", scopes: SettingScopes.All, isVisibleToClients: false),
                 new SettingDefinition (Abp.Net.Mail.EmailSettingNames.Smtp.UseDefaultCredentials, "false", scopes: SettingScopes.All, isVisibleToClients: false),

                 new SettingDefinition (AppSettingNames.ClientRootAddress, "http://localhost:4200/", scopes: SettingScopes.All, isVisibleToClients: false),

                new SettingDefinition (AbpZeroSettingNames.UserManagement.PasswordComplexity.RequireDigit, "false", scopes: SettingScopes.Application | SettingScopes.Tenant | SettingScopes.User, isVisibleToClients: false),
                new SettingDefinition (AbpZeroSettingNames.UserManagement.PasswordComplexity.RequireLowercase, "false", scopes: SettingScopes.Application | SettingScopes.Tenant | SettingScopes.User, isVisibleToClients: false),
                new SettingDefinition (AbpZeroSettingNames.UserManagement.PasswordComplexity.RequireNonAlphanumeric, "false", scopes: SettingScopes.Application | SettingScopes.Tenant | SettingScopes.User, isVisibleToClients: false),
                new SettingDefinition (AbpZeroSettingNames.UserManagement.PasswordComplexity.RequireUppercase, "false", scopes: SettingScopes.Application | SettingScopes.Tenant | SettingScopes.User, isVisibleToClients: false),
                new SettingDefinition (AbpZeroSettingNames.UserManagement.PasswordComplexity.RequiredLength, "6", scopes: SettingScopes.Application | SettingScopes.Tenant | SettingScopes.User, isVisibleToClients: false)
            };
        }
    }
}
