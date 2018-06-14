import { Component, ViewChild, Injector, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { StateServiceProxy, StateDto, ListResultDtoOfPermissionDto, CountryDto, StateCreateDto } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/app-component-base';
import { CountryServiceProxy, PagedResultDtoOfCountryDto } from '../../../shared/service-proxies/service-proxies';

@Component({
  selector: 'edit-estate-modal',
  templateUrl: './edit-estate.component.html'
})
export class EditEstateComponent extends AppComponentBase implements OnInit {

  @ViewChild('editModal') modal: ModalDirective;
  @ViewChild('modalContent') modalContent: ElementRef;

  active: boolean = false;
  saving: boolean = false;

  item: StateCreateDto = null;
  countries: CountryDto[] = []; 

  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
  constructor(
      injector: Injector,
      private _service: StateServiceProxy,
      private _countryService :CountryServiceProxy
  ) {
      super(injector);
  }

  ngOnInit(): void {
    this._countryService.getAll("",undefined,0,10000)
    .subscribe((result: PagedResultDtoOfCountryDto ) =>{
        this.countries = result.items;
    });
  }

  show(id: string): void {
      this._service.get(id)
          .finally(() => {
              this.active = true;
              this.modal.show();
          })
          .subscribe((result: StateDto) => {
            this.item = new StateCreateDto();
            this.item.id = result.id;
            this.item.abreviation = result.abreviation;
            this.item.countryId = result.countryId;
            this.item.isActive = result.isActive;
            this.item.name = result.name;
          });
  }

  onShown(): void {
      $.AdminBSB.input.activate($(this.modalContent.nativeElement));
  }

  save(): void {
      this.saving = true;
      console.log(this.item);
      this._service.update(this.item) 
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
