import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { HttpClientModule, HttpResponse } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AbpModule } from '@abp/abp.module';

import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';

import { DataTableModule  } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';

import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
import { UsersComponent } from '@app/users/users.component';
import { CreateUserComponent } from '@app/users/create-user/create-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleComponent } from '@app/roles/create-role/create-role.component';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantComponent } from './tenants/create-tenant/create-tenant.component';
import { EditTenantComponent } from './tenants/edit-tenant/edit-tenant.component';
import { TopBarComponent } from '@app/layout/topbar.component';
import { TopBarLanguageSwitchComponent } from '@app/layout/topbar-languageswitch.component';
import { SideBarUserAreaComponent } from '@app/layout/sidebar-user-area.component';
import { SideBarNavComponent } from '@app/layout/sidebar-nav.component';
import { SideBarFooterComponent } from '@app/layout/sidebar-footer.component';
import { RightSideBarComponent } from '@app/layout/right-sidebar.component';
import { MaterialInput } from '@shared/directives/material-input.directive';
import { ChangePasswordComponent } from './account/change-password/change-password.component';
import { CountriesComponent } from './countries/countries.component';
import { CreateCountryComponent }  from './countries/create-country/create-country.component';
import { EditCountryComponent } from './countries/edit-country/edit-country.component';
import { EstatesComponent } from './states/estates.component';
import { CreateEstateComponent } from './states/create-estate/create-estate.component';
import { EditEstateComponent } from './states/edit-estate/edit-estate.component';
import { CitiesComponent } from './cities/cities.component';
import { CreateCityComponent } from './cities/create-city/create-city.component';
import { EditCityComponent } from './cities/edit-city/edit-city.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        TenantsComponent,
        CreateTenantComponent,
        EditTenantComponent,
        UsersComponent,
        CreateUserComponent,
        EditUserComponent,
        RolesComponent,
        CreateRoleComponent,
        EditRoleComponent,
        TopBarComponent,
        TopBarLanguageSwitchComponent,
        SideBarUserAreaComponent,
        SideBarNavComponent,
        SideBarFooterComponent,
        RightSideBarComponent,
        ChangePasswordComponent,
        CountriesComponent, CreateCountryComponent, EditCountryComponent,
        EstatesComponent, CreateEstateComponent, EditEstateComponent,
        CitiesComponent, CreateCityComponent, EditCityComponent 
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        JsonpModule,
        ModalModule.forRoot(),
        AbpModule,
        AppRoutingModule,
        ServiceProxyModule,
        SharedModule,
        NgxPaginationModule,
        DataTableModule,
        TableModule,
        InputTextModule
    ],
    providers: [

    ]
})
export class AppModule { }
