import { Component, OnInit, ViewChild, Injector, Output, EventEmitter, ElementRef  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap'
import { AppComponentBase } from '@shared/app-component-base'
import { ChangePasswordDto, UserServiceProxy } from '../../../shared/service-proxies/service-proxies'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent extends AppComponentBase implements OnInit {
  @ViewChild('changePasswordModel') modal: ModalDirective;
  @ViewChild('modalContent') modalContent: ElementRef

  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

  active = false;
  saving = false;
  changePassword: ChangePasswordDto;

  constructor(
    injector: Injector,
    private userService: UserServiceProxy
  ) {
    super(injector);
  }

  show() {
    this.active = true;
    this.changePassword = new ChangePasswordDto();
    this.changePassword.confirmPassword = '';
    this.changePassword.currentPassword = '';
    this.changePassword.newPassword = '';
    this.modal.show();
  }

  ngOnInit() {
  }

  onShown(): void {
    $.AdminBSB.input.activate($(this.modalContent.nativeElement));
  }

  save() {
    console.log(this.changePassword);
    this.userService.changePassword(this.changePassword)
      .finally(() => { this.saving = false; })
      .subscribe(() => {
        this.notify.success(this.l('SavedSuccessfully'));
        this.close();
        this.modalSave.emit(null);
      });
  }

  close() {
    this.active = false;
    this.modal.hide();
  }

}
