import { Component, ViewChild, Injector, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { CountryServiceProxy, CountryDto, ListResultDtoOfPermissionDto } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/app-component-base';


@Component({
  selector: 'create-country-modal',
  templateUrl: './create-country.component.html'
})
export class CreateCountryComponent extends AppComponentBase implements OnInit {

    @ViewChild('createModal') modal: ModalDirective;
    @ViewChild('modalContent') modalContent: ElementRef;

    active: boolean = false;
    saving: boolean = false;

    item: CountryDto = null;

    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
    constructor(
        injector: Injector,
        private _service: CountryServiceProxy
    ) {
        super(injector);
    }

    ngOnInit(): void {

    }

    show(): void {
        this.active = true;
        this.item = new CountryDto();
        this.item.init({ isStatic: false, isActive:true });

        this.modal.show();
    }

    onShown(): void {
        $.AdminBSB.input.activate($(this.modalContent.nativeElement));
    }

    save(): void {

        this.saving = true; console.log(this.item);
        this._service.create(this.item)
            .finally(() => { this.saving = false; })
            .subscribe(() => {
                this.notify.info(this.l('SavedSuccessfully'));
                this.close();
                this.modalSave.emit(null);
            });
    }

    close(): void {
        this.active = false;
        this.modal.hide();
    }

}
