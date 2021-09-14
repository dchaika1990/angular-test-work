import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Asset} from "../../interface/asset";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
	selector: 'app-root',
	templateUrl: './root.component.html',
	styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
	assetList: Asset[] = [];
	currentAsset: Asset = {
		latitude: 0,
		longitude: 0
	};
	modalEl: any = {}
	isNew: Boolean = true
	sortField: string = 'name'
	sortFlag: any = true
	types: string[] = ['truck', 'trailer', 'transport']

	constructor(
		private modalService: NgbModal,
		private flashMessage: FlashMessagesService,
	) {
	}

	ngOnInit(): void {
		this.assetList.push(
			{id: 1, name: 'Name 1', type: 'truck', latitude: 20, longitude: 10},
			{id: 2, name: 'Name 2', type: 'trailer', latitude: 15, longitude: 20},
		)
	}

	open(context: any, el: any, isNew: boolean = true) {
		this.isNew = isNew
		this.modalEl = {...el}
		this.modalService.open(context, {ariaLabelledBy: 'modal-basic-title'})
	}

	save(modal: any) {
		let idx = this.assetList.findIndex(elem => elem.id === this.modalEl.id)
		if (idx < 0) {
			this.modalEl.id = Date.now()
			this.assetList.push(this.modalEl)
			this.flashMessage.show('You have created new asset', {
				cssClass: 'alert-success',
				timeout: 4000
			});
		} else {
			this.assetList[idx] = {...this.modalEl}
			this.currentAsset = {...this.modalEl}
			this.flashMessage.show('You have edit asset', {
				cssClass: 'alert-info',
				timeout: 4000
			});
		}
		modal.close()
	}

	delete(el: Asset) {
		this.assetList = this.assetList.filter(elem => elem.id !== el.id)
		this.flashMessage.show('Remove product', {
			cssClass: 'alert-info',
			timeout: 4000
		});
	}

	changeMap(el: Asset){
		this.currentAsset = el
	}

	changeSort(field: string){
		this.sortField = field
		this.sortFlag = !this.sortFlag
		this.flashMessage.show('Change sort', {
			cssClass: 'alert-info',
			timeout: 4000
		});
	}
}
