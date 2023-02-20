import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiebherrMenuComponent } from './liebherr-menu/liebherr-menu.component';
// import { MenuComponent } from './menu/menu.component';

export const SIDEBAR_ROUTES: Routes = [
  {
    path: 'menu',
    component: LiebherrMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(SIDEBAR_ROUTES)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
