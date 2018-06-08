import { Component, OnInit, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  accountModuleAnimation } from '../../shared/animations/routerTransition';
import { AppComponentBase } from 'shared/app-component-base';
import { AccountServiceProxy,  ResetPasswordDto } from '../../shared/service-proxies/service-proxies';
import { AppConsts } from '../../shared/AppConsts';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  animations: [accountModuleAnimation()]
})
export class ResetPasswordComponent extends AppComponentBase  implements OnInit {

  saving = false;
  input: ResetPasswordDto;
  confirmPassword = '';

  constructor(
    private _injector: Injector,
    private _router: Router,
    private _activiatedRouter: ActivatedRoute,
    private _accountService: AccountServiceProxy
  ) {
    super(_injector);
  }

  ngOnInit() {
    this.input = new ResetPasswordDto();

    this._activiatedRouter.queryParams.subscribe( params => {
      if (params['userId'] && params['resetCode']) {
        this.input.userId = params['userId'];
        this.input.resetCode = params['resetCode'];
      }
    });
  }

  save() {
    this.saving = true;
    this._accountService.resetPassword(this.input)
      .finally( () => {
        this.saving = false;
      })
      .subscribe( () => {
        this.message.success(this.l('ResetPasswordSuccess'), this.l('ResetPassword'));
        this._router.navigate(['/account/login']);
        return;
      });
  }

  back() {
    this._router.navigate(['/account/login']);
  }

}
