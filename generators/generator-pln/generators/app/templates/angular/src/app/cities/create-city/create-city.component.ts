import { Component, ViewChild, Injector, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { CityServiceProxy, ListResultDtoOfPermissionDto, AuthenticateResultModel, CityDto, CityCreateDto, ExternalLoginProviderInfoModel, StateServiceProxy } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/app-component-base';
import { CountryDto, PagedResultDtoOfCountryDto, PagedResultDtoOfStateDto } from '../../../shared/service-proxies/service-proxies';
import { CountryServiceProxy, StateDto } from 'shared/service-proxies/service-proxies';


@Component({
  selector: 'create-city-modal',
  templateUrl: './create-city.component.html'
})
export class CreateCityComponent extends AppComponentBase implements OnInit {

  @ViewChild('createModal') modal: ModalDirective;
  @ViewChild('modalContent') modalContent: ElementRef;

  active: boolean = false;
  saving: boolean = false;

  item: CityCreateDto = null;
  countryId:string = "";

  countries: CountryDto[] = [];
  estates: StateDto[] = [];


  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
  constructor(
      injector: Injector,
      private _service: CityServiceProxy,
      private _countryService : CountryServiceProxy,
      private _estateService : StateServiceProxy
  ) {
      super(injector);
  }

  ngOnInit(): void {
      this._countryService.getAll("",undefined,0,10000)
          .subscribe((result: PagedResultDtoOfCountryDto) =>{
              this.countries = result.items;
          });
        this.estates = [];
    }

  show(): void {
      this.active = true;
      this.item = new CityCreateDto();
      this.item.init({ isStatic: false, isActive:true, estateId:"" });
      this.countryId = "";
      this.modal.show();
  }

  onShown(): void {
      $.AdminBSB.input.activate($(this.modalContent.nativeElement));
  }

  save(): void {

      this.saving = true;
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

  populateStates(){
    this._estateService.getAll(undefined,undefined, undefined, this.countryId,0,10000)
        .subscribe((result : PagedResultDtoOfStateDto)=>{
            this.estates = result.items;
        });
  }

}
