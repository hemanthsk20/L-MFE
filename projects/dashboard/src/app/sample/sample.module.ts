import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { DataTableComponent } from './data-table/data-table.component';
import { TableModule } from 'ngx-easy-table';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    SampleRoutingModule,
    TableModule,
  ],
  exports:[
    DataTableComponent
  ]
})
export class SampleModule { }
