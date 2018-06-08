import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AccountRouteGuard } from './account-route-guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AccountComponent,
                children: [
                    { path: 'login', component: LoginComponent, canActivate: [AccountRouteGuard]  },
                    { path: 'register', component: RegisterComponent, canActivate: [AccountRouteGuard] },
                    { path: 'forgotpassword', component: ForgotPasswordComponent, canActivate: [AccountRouteGuard] },
                    { path: 'resetpassword', component: ResetPasswordComponent, canActivate: [AccountRouteGuard] },
                    { path: '**', pathMatch: 'full', redirectTo: 'login' }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AccountRoutingModule {}
