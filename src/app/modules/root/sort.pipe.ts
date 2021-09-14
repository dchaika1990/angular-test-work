import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

	transform(array: any, field: string, flag: boolean ): any[] {
		array.sort((a: any, b: any) => {
			if (flag) {
				if (a[field] > b[field]) {
					return -1;
				} else if (a[field] < b[field]) {
					return 1;
				} else {
					return 0;
				}
			}
			if (a[field] < b[field]) {
				return -1;
			} else if (a[field] > b[field]) {
				return 1;
			} else {
				return 0;
			}
		});
		return array;
	}

}
