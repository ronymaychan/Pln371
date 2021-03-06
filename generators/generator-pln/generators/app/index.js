const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator{
    initializing (){

    }
    prompting() {
        
        this.log(
            yosay(`Welcome to the perfect ${chalk.red('generator-pln')} generator!`)
          );

        return this.prompt([{
            type    : 'input',
            name    : 'projectName',
            message : 'Your project name:',
            default : 'Plenumsoft',
            store: true
          }]).then((answers) => {
                this.props = answers;
                this.dataTemplate = {};
                this.dataTemplate.projectName = answers.projectName;
          });
    }
    configuring(){

    }
    writing (){

        var files = [];


        files.push({source: '.gitignore'});
        files.push({source: 'CHANGELOG.md'});
        files.push({source: 'LICENSE'});
        files.push({source: 'README.md'});
        files.push({source: 'angular/.angular-cli.json'});
        files.push({source: 'angular/.editorconfig'});
        files.push({source: 'angular/.gitignore'});
        files.push({source: 'angular/.npmrc'});
        files.push({source: 'angular/app.config'});
        files.push({source: 'angular/Dockerfile'});
        files.push({source: 'angular/karma.conf.js'});
        files.push({source: 'angular/package-lock.json'});
        files.push({source: 'angular/package.json'});
        files.push({source: 'angular/Plenumsoft.AngularUI.csproj'});
        files.push({source: 'angular/Plenumsoft.AngularUI.sln'});
        files.push({source: 'angular/protractor.conf.js'});
        files.push({source: 'angular/README.md'});
        files.push({source: 'angular/tslint.json'});
        files.push({source: 'angular/Web.config'});
        files.push({source: 'angular/yarn.lock'});
        files.push({source: 'angular/e2e/app.e2e-spec.ts'});
        files.push({source: 'angular/e2e/app.po.ts'});
        files.push({source: 'angular/e2e/tsconfig.json'});
        files.push({source: 'angular/nswag/refresh.bat'});
        files.push({source: 'angular/nswag/service.config.nswag'});
        files.push({source: 'angular/nswag/service.extensions.ts'});
        files.push({source: 'angular/Properties/launchSettings.json'});
        files.push({source: 'angular/src/AppPreBootstrap.ts'});
        files.push({source: 'angular/src/favicon.ico'});
        files.push({source: 'angular/src/hmr.ts'});
        files.push({source: 'angular/src/index.html'});
        files.push({source: 'angular/src/main.ts'});
        files.push({source: 'angular/src/polyfills.ts'});
        files.push({source: 'angular/src/root-routing.module.ts'});
        files.push({source: 'angular/src/root.component.ts'});
        files.push({source: 'angular/src/root.module.ts'});
        files.push({source: 'angular/src/test.ts'});
        files.push({source: 'angular/src/tsconfig.json'});
        files.push({source: 'angular/src/typings.d.ts'});
        files.push({source: 'angular/src/account/account-route-guard.ts'});
        files.push({source: 'angular/src/account/account-routing.module.ts'});
        files.push({source: 'angular/src/account/account.component.html'});
        files.push({source: 'angular/src/account/account.component.less'});
        files.push({source: 'angular/src/account/account.component.ts'});
        files.push({source: 'angular/src/account/account.module.ts'});
        files.push({source: 'angular/src/account/forgot-password/forgot-password.component.html'});
        files.push({source: 'angular/src/account/forgot-password/forgot-password.component.ts'});
        files.push({source: 'angular/src/account/layout/account-languages.component.html'});
        files.push({source: 'angular/src/account/layout/account-languages.component.less'});
        files.push({source: 'angular/src/account/layout/account-languages.component.ts'});
        files.push({source: 'angular/src/account/login/login.component.html'});
        files.push({source: 'angular/src/account/login/login.component.less'});
        files.push({source: 'angular/src/account/login/login.component.ts'});
        files.push({source: 'angular/src/account/login/login.service.ts'});
        files.push({source: 'angular/src/account/register/register.component.html'});
        files.push({source: 'angular/src/account/register/register.component.ts'});
        files.push({source: 'angular/src/account/reset-password/reset-password.component.html'});
        files.push({source: 'angular/src/account/reset-password/reset-password.component.ts'});
        files.push({source: 'angular/src/account/tenant/tenant-change-modal.component.html'});
        files.push({source: 'angular/src/account/tenant/tenant-change-modal.component.ts'});
        files.push({source: 'angular/src/account/tenant/tenant-change.component.html'});
        files.push({source: 'angular/src/account/tenant/tenant-change.component.ts'});
        files.push({source: 'angular/src/app/app-routing.module.ts'});
        files.push({source: 'angular/src/app/app.component.html'});
        files.push({source: 'angular/src/app/app.component.spec.ts'});
        files.push({source: 'angular/src/app/app.component.ts'});
        files.push({source: 'angular/src/app/app.module.ts'});
        files.push({source: 'angular/src/app/about/about.component.html'});
        files.push({source: 'angular/src/app/about/about.component.ts'});
        files.push({source: 'angular/src/app/account/change-password/change-password.component.html'});
        files.push({source: 'angular/src/app/account/change-password/change-password.component.ts'});
        files.push({source: 'angular/src/app/home/home.component.html'});
        files.push({source: 'angular/src/app/home/home.component.ts'});
        files.push({source: 'angular/src/app/layout/right-sidebar.component.html'});
        files.push({source: 'angular/src/app/layout/right-sidebar.component.ts'});
        files.push({source: 'angular/src/app/layout/sidebar-footer.component.html'});
        files.push({source: 'angular/src/app/layout/sidebar-footer.component.ts'});
        files.push({source: 'angular/src/app/layout/sidebar-nav.component.html'});
        files.push({source: 'angular/src/app/layout/sidebar-nav.component.ts'});
        files.push({source: 'angular/src/app/layout/sidebar-user-area.component.html'});
        files.push({source: 'angular/src/app/layout/sidebar-user-area.component.ts'});
        files.push({source: 'angular/src/app/layout/topbar-languageswitch.component.html'});
        files.push({source: 'angular/src/app/layout/topbar-languageswitch.component.ts'});
        files.push({source: 'angular/src/app/layout/topbar.component.html'});
        files.push({source: 'angular/src/app/layout/topbar.component.ts'});
        files.push({source: 'angular/src/app/roles/roles.component.html'});
        files.push({source: 'angular/src/app/roles/roles.component.ts'});
        files.push({source: 'angular/src/app/roles/create-role/create-role.component.html'});
        files.push({source: 'angular/src/app/roles/create-role/create-role.component.ts'});
        files.push({source: 'angular/src/app/roles/edit-role/edit-role.component.html'});
        files.push({source: 'angular/src/app/roles/edit-role/edit-role.component.ts'});
        files.push({source: 'angular/src/app/tenants/tenants.component.html'});
        files.push({source: 'angular/src/app/tenants/tenants.component.ts'});
        files.push({source: 'angular/src/app/tenants/create-tenant/create-tenant.component.html'});
        files.push({source: 'angular/src/app/tenants/create-tenant/create-tenant.component.ts'});
        files.push({source: 'angular/src/app/tenants/edit-tenant/edit-tenant.component.html'});
        files.push({source: 'angular/src/app/tenants/edit-tenant/edit-tenant.component.ts'});
        files.push({source: 'angular/src/app/users/users.component.html'});
        files.push({source: 'angular/src/app/users/users.component.ts'});
        files.push({source: 'angular/src/app/users/create-user/create-user.component.html'});
        files.push({source: 'angular/src/app/users/create-user/create-user.component.ts'});
        files.push({source: 'angular/src/app/users/edit-user/edit-user.component.html'});
        files.push({source: 'angular/src/app/users/edit-user/edit-user.component.ts'});
        files.push({source: 'angular/src/assets/.gitkeep'});
        files.push({source: 'angular/src/assets/app-logo-small.png'});
        files.push({source: 'angular/src/assets/appconfig.json'});
        files.push({source: 'angular/src/assets/fonts/roboto/-2n2p-_Y08sg57CNWQfKNvesZW2xOQ-xsNqO47m55DA.woff2'});
        files.push({source: 'angular/src/assets/fonts/roboto/77FXFjRbGzN4aCrSFhlh3hJtnKITppOI_IvcXXDNrsc.woff2'});
        files.push({source: 'angular/src/assets/fonts/roboto/97uahxiqZRoncBaCEI3aWxJtnKITppOI_IvcXXDNrsc.woff2'});
        files.push({source: 'angular/src/assets/fonts/roboto/CWB0XYA8bzo0kSThX0UTuA.woff2'});
        files.push({source: 'angular/src/assets/fonts/roboto/d-6IYplOFocCacKzxwXSOFtXRa8TVwTICgirnJhmVJw.woff2'});
        files.push({source: 'angular/src/assets/fonts/roboto/ek4gzZ-GeXAPcSbHtCeQI_esZW2xOQ-xsNqO47m55DA.woff2'});
        files.push({source: 'angular/src/assets/fonts/roboto/Fcx7Wwv8OzT71A3E1XOAjvesZW2xOQ-xsNqO47m55DA.woff2'});
        files.push({source: 'angular/src/assets/fonts/roboto/isZ-wbCXNKAbnjo6_TwHThJtnKITppOI_IvcXXDNrsc.woff2'});
        files.push({source: 'angular/src/assets/fonts/roboto/jSN2CGVDbcVyCnfJfjSdfBJtnKITppOI_IvcXXDNrsc.woff2'});
        files.push({source: 'angular/src/assets/fonts/roboto/mErvLBYg_cXG3rLvUsKT_fesZW2xOQ-xsNqO47m55DA.woff2'});
        files.push({source: 'angular/src/assets/fonts/roboto/NdF9MtnOpLzo-noMoG0miPesZW2xOQ-xsNqO47m55DA.woff2'});
        files.push({source: 'angular/src/assets/fonts/roboto/PwZc-YbIL414wB9rB1IAPRJtnKITppOI_IvcXXDNrsc.woff2'});
        files.push({source: 'angular/src/assets/fonts/roboto/roboto.css'});
        files.push({source: 'angular/src/assets/fonts/roboto/u0TOpm082MNkS5K0Q4rhqvesZW2xOQ-xsNqO47m55DA.woff2'});
        files.push({source: 'angular/src/assets/fonts/roboto/UX6i4JxQDm3fVTc1CPuwqhJtnKITppOI_IvcXXDNrsc.woff2'});
        files.push({source: 'angular/src/assets/images/user.png'});
        files.push({source: 'angular/src/bsb-theme/css/materialize.css'});
        files.push({source: 'angular/src/bsb-theme/css/style.css'});
        files.push({source: 'angular/src/bsb-theme/css/style.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/all-themes.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/all-themes.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-amber.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-amber.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-black.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-black.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-blue-grey.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-blue-grey.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-blue.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-blue.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-brown.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-brown.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-cyan.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-cyan.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-deep-orange.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-deep-orange.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-deep-purple.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-deep-purple.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-green.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-green.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-grey.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-grey.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-indigo.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-indigo.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-light-blue.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-light-blue.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-lime.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-lime.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-orange.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-orange.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-pink.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-pink.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-purple.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-purple.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-red.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-red.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-teal.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-teal.min.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-yellow.css'});
        files.push({source: 'angular/src/bsb-theme/css/themes/theme-yellow.min.css'});
        files.push({source: 'angular/src/bsb-theme/images/user-img-background.jpg'});
        files.push({source: 'angular/src/bsb-theme/js/admin.js'});
        files.push({source: 'angular/src/bsb-theme/js/demo.js'});
        files.push({source: 'angular/src/bsb-theme/js/helpers.js'});
        files.push({source: 'angular/src/bsb-theme/js/jquery.validate.js'});
        files.push({source: 'angular/src/environments/environment.hmr.ts'});
        files.push({source: 'angular/src/environments/environment.prod.ts'});
        files.push({source: 'angular/src/environments/environment.ts'});
        files.push({source: 'angular/src/shared/app-component-base.ts'});
        files.push({source: 'angular/src/shared/AppConsts.ts'});
        files.push({source: 'angular/src/shared/AppEnums.ts'});
        files.push({source: 'angular/src/shared/core.less'});
        files.push({source: 'angular/src/shared/paged-listing-component-base.ts'});
        files.push({source: 'angular/src/shared/shared.module.ts'});
        files.push({source: 'angular/src/shared/animations/routerTransition.ts'});
        files.push({source: 'angular/src/shared/auth/app-auth.service.ts'});
        files.push({source: 'angular/src/shared/auth/auth-route-guard.ts'});
        files.push({source: 'angular/src/shared/directives/material-input.directive.ts'});
        files.push({source: 'angular/src/shared/helpers/SignalRAspNetCoreHelper.ts'});
        files.push({source: 'angular/src/shared/helpers/SignalRHelper.ts'});
        files.push({source: 'angular/src/shared/helpers/UrlHelper.ts'});
        files.push({source: 'angular/src/shared/layout/menu-item.ts'});
        files.push({source: 'angular/src/shared/nav/app-url.service.ts'});
        files.push({source: 'angular/src/shared/service-proxies/service-proxies.ts'});
        files.push({source: 'angular/src/shared/service-proxies/service-proxy.module.ts'});
        files.push({source: 'angular/src/shared/session/app-session.service.ts'});
        files.push({source: 'aspnet-core/.gitattributes'});
        files.push({source: 'aspnet-core/.gitignore'});
        files.push({source: 'aspnet-core/NuGet.Config'});
        files.push({source: 'aspnet-core/Plenumsoft.sln'});
        files.push({source: 'aspnet-core/build/build-with-ng.ps1'});
        files.push({source: 'aspnet-core/docker/ng/docker-compose.yml'});
        files.push({source: 'aspnet-core/docker/ng/down.ps1'});
        files.push({source: 'aspnet-core/docker/ng/up.ps1'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/AppConsts.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Plenumsoft.Application.csproj'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/PlenumsoftApplicationModule.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/PlenumsoftAppServiceBase.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Authorization/AbpLoginResultTypeHelper.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Authorization/Accounts/AccountAppService.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Authorization/Accounts/IAccountAppService.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Authorization/Accounts/Dto/ForgotPasswordDto.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Authorization/Accounts/Dto/IsTenantAvailableInput.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Authorization/Accounts/Dto/IsTenantAvailableOutput.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Authorization/Accounts/Dto/RegisterInput.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Authorization/Accounts/Dto/RegisterOutput.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Authorization/Accounts/Dto/ResetPasswordDto.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Authorization/Accounts/Dto/TenantAvailabilityState.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Configuration/ConfigurationAppService.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Configuration/IConfigurationAppService.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Configuration/Dto/ChangeUiThemeInput.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Configuration/Ui/UiThemeInfo.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Configuration/Ui/UiThemes.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/MultiTenancy/ITenantAppService.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/MultiTenancy/TenantAppService.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/MultiTenancy/Dto/CreateTenantDto.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/MultiTenancy/Dto/TenantDto.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Net/MimeTypes/MimeTypeNames.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Properties/AssemblyInfo.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Roles/IRoleAppService.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Roles/RoleAppService.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Roles/Dto/CreateRoleDto.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Roles/Dto/PermissionDto.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Roles/Dto/RoleDto.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Roles/Dto/RoleMapProfile.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Sessions/ISessionAppService.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Sessions/SessionAppService.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Sessions/Dto/ApplicationInfoDto.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Sessions/Dto/GetCurrentLoginInformationsOutput.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Sessions/Dto/TenantLoginInfoDto.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Sessions/Dto/UserLoginInfoDto.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/SignalR/SignalRFeature.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Users/IUserAppService.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Users/UserAppService.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Users/Dto/ChangePasswordDto.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Users/Dto/ChangeUserLanguageDto.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Users/Dto/CreateUserDto.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Users/Dto/UserDto.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Application/Users/Dto/UserMapProfile.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/AppVersionHelper.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Plenumsoft.Core.csproj'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/PlenumsoftConsts.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/PlenumsoftCoreModule.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Authorization/LoginManager.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Authorization/PermissionChecker.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Authorization/PermissionNames.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Authorization/PlenumsoftAuthorizationProvider.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Authorization/Roles/AppRoleConfig.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Authorization/Roles/Role.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Authorization/Roles/RoleManager.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Authorization/Roles/RoleStore.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Authorization/Roles/StaticRoleNames.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Authorization/Users/User.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Authorization/Users/UserClaimsPrincipalFactory.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Authorization/Users/UserManager.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Authorization/Users/UserRegistrationManager.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Authorization/Users/UserStore.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Configuration/AppConfigurations.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Configuration/AppSettingNames.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Configuration/AppSettingProvider.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Editions/EditionManager.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Features/FeatureValueStore.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Helpers/FluentTemplate.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Identity/IdentityRegistrar.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Identity/SecurityStampValidator.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Identity/SignInManager.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Localization/PlenumsoftLocalizationConfigurer.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Localization/SourceFiles/Plenumsoft-es.xml'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Localization/SourceFiles/Plenumsoft-fr.xml'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Localization/SourceFiles/Plenumsoft-it.xml'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Localization/SourceFiles/Plenumsoft-ja.xml'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Localization/SourceFiles/Plenumsoft-lt.xml'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Localization/SourceFiles/Plenumsoft-nl.xml'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Localization/SourceFiles/Plenumsoft-pt-BR.xml'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Localization/SourceFiles/Plenumsoft-tr.xml'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Localization/SourceFiles/Plenumsoft-zh-CN.xml'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Localization/SourceFiles/Plenumsoft.xml'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/MultiTenancy/Tenant.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/MultiTenancy/TenantManager.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Properties/AssemblyInfo.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Timing/AppTimes.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Validation/ValidationHelper.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Core/Web/WebContentFolderHelper.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Plenumsoft.EntityFrameworkCore.csproj'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/EntityFrameworkCore/AbpZeroDbMigrator.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/EntityFrameworkCore/PlenumsoftDbContext.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/EntityFrameworkCore/PlenumsoftDbContextConfigurer.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/EntityFrameworkCore/PlenumsoftDbContextFactory.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/EntityFrameworkCore/PlenumsoftEntityFrameworkModule.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/EntityFrameworkCore/Repositories/PlenumsoftRepositoryBase.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/EntityFrameworkCore/Seed/SeedHelper.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/EntityFrameworkCore/Seed/Host/DefaultEditionCreator.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/EntityFrameworkCore/Seed/Host/DefaultLanguagesCreator.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/EntityFrameworkCore/Seed/Host/DefaultSettingsCreator.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/EntityFrameworkCore/Seed/Host/HostRoleAndUserCreator.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/EntityFrameworkCore/Seed/Host/InitialHostDbBuilder.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/EntityFrameworkCore/Seed/Tenants/DefaultTenantBuilder.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/EntityFrameworkCore/Seed/Tenants/TenantRoleAndUserBuilder.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/20170424115119_Initial_Migrations.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/20170424115119_Initial_Migrations.Designer.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/20170608053244_Upgraded_To_Abp_2_1_0.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/20170608053244_Upgraded_To_Abp_2_1_0.Designer.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/20170621153937_Added_Description_And_IsActive_To_Role.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/20170621153937_Added_Description_And_IsActive_To_Role.Designer.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/20170703134115_Remove_IsActive_From_Role.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/20170703134115_Remove_IsActive_From_Role.Designer.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/20170804083601_Upgraded_To_Abp_v2.2.2.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/20170804083601_Upgraded_To_Abp_v2.2.2.Designer.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/20180201051646_Upgraded_To_Abp_v3.4.0.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/20180201051646_Upgraded_To_Abp_v3.4.0.Designer.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/20180320131229_Upgraded_To_Abp_v3_5_0.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/20180320131229_Upgraded_To_Abp_v3_5_0.Designer.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/20180509121141_Upgraded_To_Abp_v3_6_1.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/20180509121141_Upgraded_To_Abp_v3_6_1.Designer.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.EntityFrameworkCore/Migrations/PlenumsoftDbContextModelSnapshot.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Migrator/appsettings.json'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Migrator/Log.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Migrator/log4net.config'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Migrator/MultiTenantMigrateExecuter.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Migrator/Plenumsoft.Migrator.csproj'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Migrator/PlenumsoftMigratorModule.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Migrator/Program.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Migrator/DependencyInjection/ServiceCollectionRegistrar.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Migrator/Properties/AssemblyInfo.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Plenumsoft.Web.Core.csproj'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/PlenumsoftWebCoreModule.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Authentication/External/ExternalAuthConfiguration.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Authentication/External/ExternalAuthManager.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Authentication/External/ExternalAuthProviderApiBase.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Authentication/External/ExternalAuthUserInfo.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Authentication/External/ExternalLoginProviderInfo.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Authentication/External/IExternalAuthConfiguration.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Authentication/External/IExternalAuthManager.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Authentication/External/IExternalAuthProviderApi.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Authentication/JwtBearer/JwtTokenMiddleware.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Authentication/JwtBearer/TokenAuthConfiguration.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Configuration/HostingEnvironmentExtensions.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Controllers/PlenumsoftControllerBase.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Controllers/TokenAuthController.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Identity/ExternalLoginInfoHelper.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Models/TokenAuth/AuthenticateModel.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Models/TokenAuth/AuthenticateResultModel.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Models/TokenAuth/ExternalAuthenticateModel.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Models/TokenAuth/ExternalAuthenticateResultModel.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Models/TokenAuth/ExternalLoginProviderInfoModel.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Owin/BuilderExtensions.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Core/Properties/AssemblyInfo.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/app.config'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/appsettings.json'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/appsettings.Staging.json'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Dockerfile'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/log4net.config'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Plenumsoft.Web.Host.csproj'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/web.config'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Content/Templates/forgot-password.en.html'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Content/Templates/forgot-password.es.html'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Content/Templates/forgot-password.fr.html'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Content/Templates/forgot-password.html'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Content/Templates/forgot-password.it.html'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Content/Templates/forgot-password.ja.html'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Content/Templates/forgot-password.lt.html'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Content/Templates/forgot-password.nl.html'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Content/Templates/forgot-password.pt-BR.html'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Content/Templates/forgot-password.tr.html'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Content/Templates/forgot-password.zh-CN.html'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Controllers/AntiForgeryController.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Controllers/HomeController.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Properties/launchSettings.json'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Startup/AuthConfigurer.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Startup/PlenumsoftWebHostModule.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Startup/Program.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Startup/SecurityRequirementsOperationFilter.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/Startup/Startup.cs'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/wwwroot/swagger/ui/abp.js'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/wwwroot/swagger/ui/abp.swagger.js'});
        files.push({source: 'aspnet-core/src/Plenumsoft.Web.Host/wwwroot/swagger/ui/index.html'});
        files.push({source: 'aspnet-core/test/Plenumsoft.Tests/MultiTenantFactAttribute.cs'});
        files.push({source: 'aspnet-core/test/Plenumsoft.Tests/Plenumsoft.Tests.csproj'});
        files.push({source: 'aspnet-core/test/Plenumsoft.Tests/PlenumsoftTestBase.cs'});
        files.push({source: 'aspnet-core/test/Plenumsoft.Tests/PlenumsoftTestModule.cs'});
        files.push({source: 'aspnet-core/test/Plenumsoft.Tests/DependencyInjection/ServiceCollectionRegistrar.cs'});
        files.push({source: 'aspnet-core/test/Plenumsoft.Tests/Properties/AssemblyInfo.cs'});
        files.push({source: 'aspnet-core/test/Plenumsoft.Tests/Sessions/SessionAppService_Tests.cs'});
        files.push({source: 'aspnet-core/test/Plenumsoft.Tests/Users/UserAppService_Tests.cs'});
        files.push({source: '_screenshots/ui-home.png'});
        files.push({source: '_screenshots/ui-login.png'});
        files.push({source: '_screenshots/ui-user-create-modal.png'});




        
        /*Creación de los archivos */
        files.forEach(item => {
            var destination = item.source.replace(/Plenumsoft/g, this.dataTemplate.projectName);
            this.fs.copyTpl(this.templatePath( item.source ),this.destinationPath(destination), this.dataTemplate);  
        });

    }
    conflicts (){

    }
    install (){
        var angularRoot = process.cwd() + '/angular';
        process.chdir(angularRoot);
        this.installDependencies({
          npm: true,
          bower: false,
          yarn: false
        });
    }
    end (){

    }
};