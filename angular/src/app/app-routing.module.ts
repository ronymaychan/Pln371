import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RolesComponent } from 'app/roles/roles.component';
import { CountriesComponent }  from './countries/countries.component';
import { EstatesComponent } from './states/estates.component';
import { CitiesComponent } from './cities/cities.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'home', component: HomeComponent,  canActivate: [AppRouteGuard] },
                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'countries', component: CountriesComponent, data: { permission: 'Pages.Countries' }, canActivate: [AppRouteGuard] },
                    { path: 'states', component: EstatesComponent, data: { permission: 'Pages.States' }, canActivate: [AppRouteGuard] },
                    { path: 'cities', component: CitiesComponent, data: { permission: 'Pages.Cities' }, canActivate: [AppRouteGuard] },
                    { path: 'about', component: AboutComponent },
                    { path: '**', pathMatch: 'full', redirectTo: 'home' }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
