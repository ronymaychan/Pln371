import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { accountModuleAnimation } from '@shared/animations/routerTransition'
import { AppComponentBase } from '@shared/app-component-base';
import { AccountServiceProxy, ForgotPasswordDto } from '../../shared/service-proxies/service-proxies';
import { AppConsts } from '../../shared/AppConsts';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  animations: [accountModuleAnimation()]
})
export class ForgotPasswordComponent  extends AppComponentBase implements OnInit {

  saving = false;
  forgotPasswordDto: ForgotPasswordDto;

  constructor(
    private _injector: Injector,
    private _router: Router,
    private _accountService: AccountServiceProxy
  ) {
    super(_injector);
  }

  ngOnInit() {
    this.forgotPasswordDto = new ForgotPasswordDto();
    this.forgotPasswordDto.email = '';
  }

  save() {
    this.saving = true;
    this._accountService.forgotPassword(this.forgotPasswordDto)
      .finally(() => {
        this.saving = false;
      })
      .subscribe(() => {
        this.message.success(this.l('ForgotpasswordSuccess'), this.l('MailSent'));
        this._router.navigate(['/account/login']);
        return;
      });
  }

  back() {
    this._router.navigate(['/account/login']);
  }
}
