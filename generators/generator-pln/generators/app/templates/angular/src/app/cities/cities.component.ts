import { Component, Injector, ViewChild, OnInit, ElementRef } from '@angular/core';
import { PagedListingComponentBase, PagedRequestDto } from "shared/paged-listing-component-base";
import { CityDto, PagedResultDtoOfCityDto, CountryServiceProxy, PagedResultDtoOfCountryDto, StateDto } from 'shared/service-proxies/service-proxies';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { CityServiceProxy, CountryDto } from '@shared/service-proxies/service-proxies';
import { CreateCityComponent } from './create-city/create-city.component';
import { EditCityComponent } from './edit-city/edit-city.component';
import { StateServiceProxy, PagedResultDtoOfStateDto } from '../../shared/service-proxies/service-proxies';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  animations: [appModuleAnimation()]
})
export class CitiesComponent extends PagedListingComponentBase<CityDto> implements OnInit  {

  @ViewChild('createModal') createModal: CreateCityComponent;
  @ViewChild('editModal') editModal: EditCityComponent;
  @ViewChild('inputContent') inputContent: ElementRef;

 items: CityDto[] = [];

 countryName: string ="";
 estateName: string ="";
 cityName: string = "";
 isActive: any;

 constructor(
   private injector:Injector,
   private service: CityServiceProxy,
   private _countryService :CountryServiceProxy,
   private _estateService: StateServiceProxy
 ) {
   super(injector);
 }

 ngOnInit(): void {
     this.refresh();
     $.AdminBSB.input.activate($(this.inputContent.nativeElement));
 }


 list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
   this.service.getAll(this.countryName, this.estateName, this.cityName, this.isActive, request.skipCount,request.maxResultCount)
     .finally( ()=> {
       finishedCallback();
     })
    .subscribe((result: PagedResultDtoOfCityDto)=>{
       this.items = result.items;
       this.showPaging(result, pageNumber);
   });
 }

 delete(item: CityDto): void {
   abp.message.confirm(
     this.l("DeleteMessageConfirmation"),
     this.l("DeleteTitleConfirmation"),
     (result:boolean) =>{
       if(result)
       {
         this.service.delete(item.id)
           .finally(() => {
             abp.notify.info(this.l("DeleteSuccessfully") + ": "+ item.name );
             this.refresh();
           })
           .subscribe(() => { });
       }
     }
   );
 }

 // Show Modals
 create(): void {
  this.createModal.show();
 }

 edit(item:CityDto): void {
  this.editModal.show(item.id);
 }

 search(): void{
   this.refresh();
 }

}
