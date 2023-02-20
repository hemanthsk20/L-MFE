import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAppComponent } from './create-app/create-app.component';

const MOBILE_CMS_ROUTES: Routes = [
  { path: 'create-app', component: CreateAppComponent}
];

@NgModule({
  imports: [RouterModule.forChild(MOBILE_CMS_ROUTES)],
  exports: [RouterModule]
})
export class MobileCmsRoutingModule { }
