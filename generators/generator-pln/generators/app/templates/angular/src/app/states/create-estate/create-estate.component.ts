import { Component, ViewChild, Injector, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { StateServiceProxy, ListResultDtoOfPermissionDto, AuthenticateResultModel, StateCreateDto } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/app-component-base';
import { CountryDto, PagedResultDtoOfCountryDto } from '../../../shared/service-proxies/service-proxies';
import { CountryServiceProxy } from 'shared/service-proxies/service-proxies';


@Component({
  selector: 'create-estate-modal',
  templateUrl: './create-estate.component.html'
})
export class CreateEstateComponent extends AppComponentBase implements OnInit {

    @ViewChild('createModal') modal: ModalDirective;
    @ViewChild('modalContent') modalContent: ElementRef;

    active: boolean = false;
    saving: boolean = false;

    item: StateCreateDto = null;
    countries: CountryDto[] = []; 


    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
    constructor(
        injector: Injector,
        private _service: StateServiceProxy,
        private _countryService : CountryServiceProxy
    ) {
        super(injector);
    }

    ngOnInit(): void {
        this._countryService.getAll("",undefined,0,10000)
            .subscribe((result: PagedResultDtoOfCountryDto) =>{
                this.countries = result.items;
            });
    }

    show(): void {
        this.active = true;
        this.item = new StateCreateDto();
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
