import { Component, ViewContainerRef, Injector, OnInit, AfterViewInit,ViewChild } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';
import { AppComponentBase } from '@shared/app-component-base';
import { AppAuthService } from '@shared/auth/app-auth.service';

import { SignalRHelper } from '@shared/helpers/SignalRHelper';
import { SignalRAspNetCoreHelper } from '@shared/helpers/SignalRAspNetCoreHelper';
import { ChangePasswordComponent } from './account/change-password/change-password.component';

@Component({
  templateUrl: './app.component.html'
})
export class AppComponent extends AppComponentBase implements OnInit, AfterViewInit {
  @ViewChild('changePasswordModel') changePasswordModel: ChangePasswordComponent;
  private viewContainerRef: ViewContainerRef;

  shownLoginName = "";

  constructor(
    injector: Injector,
    private _authService: AppAuthService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.shownLoginName = this.appSession.getShownLoginName();
    
    if (this.appSession.application.features['SignalR']) {
      if (this.appSession.application.features['SignalR.AspNetCore']) {
        SignalRAspNetCoreHelper.initSignalR();
      } else {
        SignalRHelper.initSignalR();
      }
    }

    abp.event.on('abp.notifications.received', userNotification => {
      abp.notifications.showUiNotifyForUserNotification(userNotification);

      //Desktop notification
      Push.create("AbpZeroTemplate", {
        body: userNotification.notification.data.message,
        icon: abp.appPath + 'assets/app-logo-small.png',
        timeout: 6000,
        onClick: function () {
          window.focus();
          this.close();
        }
      });
    });
  }

  ngAfterViewInit(): void {
    ($ as any).AdminBSB.activateAll();
    ($ as any).AdminBSB.activateDemo();
  }

  logout(): void {
    this._authService.logout();
  }

  changePassword(): void {
    this.changePasswordModel.show();
  }
}