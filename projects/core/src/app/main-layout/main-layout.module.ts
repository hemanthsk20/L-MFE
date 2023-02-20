import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MobileCmsModule } from '../mobile-cms/mobile-cms.module';
import { SampleModule } from 'projects/dashboard/src/app/sample/sample.module';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    HomeComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    MobileCmsModule,
    RouterModule,
    BreadcrumbModule,
    MatIconModule
  ],
  exports:[HeaderComponent, HomeComponent, FooterComponent, BreadcrumbComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainLayoutModule { }
