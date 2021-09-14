import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Asset} from "../../interface/asset";

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

	constructor(private modalService: NgbModal) {
	}

	ngOnInit(): void {
		this.assetList.push(
			{id: 1, name: 'Name 1', type: 'Track 1', latitude: 20, longitude: 10},
			{id: 2, name: 'Name 2', type: 'Brack 2', latitude: 15, longitude: 20},
		)
	}

	open(context: any, el: any, isNew: boolean = true) {
		this.isNew = isNew
		this.modalEl = {...el}
		this.modalService.open(context, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

		}, (reason) => {

		});
	}

	save(modal: any) {
		let idx = this.assetList.findIndex(elem => elem.id === this.modalEl.id)
		if (idx < 0) {
			this.modalEl.id = Date.now()
			this.assetList.push(this.modalEl)
		} else {
			this.assetList[idx] = {...this.modalEl}
			this.currentAsset = {...this.modalEl}
		}
		modal.close()
		console.log(this.assetList)
	}

	delete(el: Asset) {
		this.assetList = this.assetList.filter(elem => elem.id !== el.id)
	}

	changeMap(el: Asset){
		this.currentAsset = el
	}

	changeSort(field: string){
		this.sortField = field
		this.sortFlag = !this.sortFlag
	}
}
