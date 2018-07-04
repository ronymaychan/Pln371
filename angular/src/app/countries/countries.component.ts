import { Component, Injector, ViewChild, ElementRef } from '@angular/core';
import { PagedListingComponentBase, PagedRequestDto } from "shared/paged-listing-component-base";
import { CountryServiceProxy, CountryDto, PagedResultDtoOfCountryDto } from "shared/service-proxies/service-proxies";
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { CreateCountryComponent } from './create-country/create-country.component';
import { EditCountryComponent } from './edit-country/edit-country.component';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  animations: [appModuleAnimation()]
})
export class CountriesComponent extends PagedListingComponentBase<CountryDto> {

   @ViewChild('createModal') createModal: CreateCountryComponent;
   @ViewChild('editModal') editModal: EditCountryComponent;
   @ViewChild('inputContent') inputContent: ElementRef;

	items: CountryDto[] = [];
	filter: string = "";
	isActive: any;

	constructor(
		private injector:Injector,
		private _service: CountryServiceProxy
	) {
		super(injector);
	}

  ngOnInit(): void {
      this.refresh();
      $.AdminBSB.input.activate($(this.inputContent.nativeElement));
  }

	list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
		this._service.getAll(this.filter, this.isActive, request.skipCount,request.maxResultCount)
			.finally( ()=> {
				finishedCallback();
			})
            .subscribe((result: PagedResultDtoOfCountryDto)=>{
				this.items = result.items;
				this.showPaging(result, pageNumber);
		});
	}

	delete(item: CountryDto): void {
		abp.message.confirm(
			this.l("DeleteMessageConfirmation"),
			this.l("DeleteTitleConfirmation"),
			(result:boolean) =>{
				if(result)
				{
					this._service.delete(item.id)
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

	edit(item:CountryDto): void {
		this.editModal.show(item.id);
	}

	search(): void{
		this.refresh();
	}
}
