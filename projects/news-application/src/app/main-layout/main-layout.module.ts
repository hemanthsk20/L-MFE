import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    RouterModule,
    MatIconModule,
    BreadcrumbModule,
    ReactiveFormsModule,
  ],
  exports:[HeaderComponent, HomeComponent, FooterComponent, BreadcrumbComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainLayoutModule { }
