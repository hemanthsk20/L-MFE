import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SIDEBAR_ROUTES } from './sidebar-routing.module';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { LiebherrMenuComponent } from './liebherr-menu/liebherr-menu.component';


@NgModule({
  declarations: [
    MenuComponent,
    LiebherrMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SIDEBAR_ROUTES)
  ]
})
export class SidebarModule { }
