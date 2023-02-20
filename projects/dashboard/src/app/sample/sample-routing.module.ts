import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';

const DASHBOARD_ROUTES: Routes = [
  {
    path: 'data-table',
    component: DataTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
