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
	arr: any[] = [{id: 1, label: 'label 1'}, {id: 2, label: 'label 2'}]
	modalEl: any = {}

	constructor(private modalService: NgbModal) {
	}

	ngOnInit(): void {
		this.assetList.push(
			{id: 1, name: 'Name 1', type: 'Track 1', latitude: 20, longitude: 10},
			{id: 2, name: 'Name 2', type: 'Track 2', latitude: 15, longitude: 20},
		)
	}

	open(context: any, el: any) {
		this.modalEl = {...el}
		this.modalService.open(context, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

		}, (reason) => {

		});
	}

	save(modal: any) {
		let idx = this.assetList.findIndex(elem => elem.id === this.modalEl.id)
		this.assetList[idx] = {...this.modalEl}
		this.currentAsset = {...this.modalEl}
		modal.close()
	}

	delete(el: Asset) {
		this.assetList = this.assetList.filter(elem => elem.id !== el.id)
	}

	changeMap(el: Asset){
		this.currentAsset = el
	}

}
