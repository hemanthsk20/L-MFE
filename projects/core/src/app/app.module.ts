import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MenuComponent } from 'projects/sidenav/src/app/sidebar/menu/menu.component';
import { SidebarModule } from 'projects/sidenav/src/app/sidebar/sidebar.module';
import { APP_ROUTES } from './app-routing.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HTTPInterceptor } from './interceptors/http.interceptor';
import { CommonModule } from '@angular/common';
import { TableModule } from 'ngx-easy-table';
import { BreadcrumbModule } from 'xng-breadcrumb';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MainLayoutModule,
    SidebarModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    BreadcrumbModule
  ],
  providers: [MenuComponent, { provide: HTTP_INTERCEPTORS, useClass: HTTPInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
