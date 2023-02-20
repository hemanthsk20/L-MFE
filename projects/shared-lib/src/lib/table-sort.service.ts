import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TableSortService {
    tablePosition: number;
    previousValueSelected = '';
    filters: any;

    constructor() {}

    headerTableSorting(filteringValue: any, position?: number) {
        let filterValues;

        if (filteringValue.event) {
            filterValues = filteringValue.value;
        } else {
            filterValues = filteringValue[0];
        }

        if (position != 0 && position) {
            this.tablePosition = position;
            this.previousValueSelected = filteringValue[0].order;
        }

        let doc = document.querySelectorAll('.ngx-table__header-title');
        if (position) {
            let doc2 = doc[position].querySelectorAll('div');
            if (filterValues.order === 'asc') {
                doc2[0].innerHTML =
                    '<div _ngcontent-aub-c72="" style="display: inline;"><em _ngcontent-aub-c72="" class="ngx-icon ngx-icon-arrow-up"></em></div>';
            } else if (filterValues.order === 'reset') {
                doc2[0].innerHTML =
                    '<div _ngcontent-aub-c72="" style="display: none;"><em _ngcontent-aub-c72="" class="ngx-icon ngx-icon-arrow-up"></em></div>';
            } else {
                doc2[0].innerHTML =
                    '<div _ngcontent-aub-c72="" style="display: inline;"><em _ngcontent-aub-c72="" class="ngx-icon ngx-icon-arrow-down"></em></div>';
            }
        } else if (this.tablePosition !== 0 && typeof this.tablePosition !== 'undefined') {
            filterValues.order = this.previousValueSelected === 'desc' ? 'asc' : 'desc';
            let doc2 = doc[this.tablePosition].querySelectorAll('div');
            if (filterValues.order === 'asc') {
                doc2[0].innerHTML =
                    '<div _ngcontent-aub-c72="" style="display: inline;"><em _ngcontent-aub-c72="" class="ngx-icon ngx-icon-arrow-up"></em></div>';
            } else {
                doc2[0].innerHTML =
                    '<div _ngcontent-aub-c72="" style="display: inline;"><em _ngcontent-aub-c72="" class="ngx-icon ngx-icon-arrow-down"></em></div>';
            }
        }
        this.filters = filterValues;
        this.previousValueSelected = filterValues.order;
    }
}
