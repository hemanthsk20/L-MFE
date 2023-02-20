import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'ngx-easy-table';
import { MenuComponent } from 'projects/sidenav/src/app/sidebar/menu/menu.component';
import { APP_ROUTES } from './app-routing.module'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HTTPInterceptor } from './interceptors/http.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { CompanyNewsModule } from './company-news/company-news.module';
import { UploadFileDialogComponent } from './company-news/upload-file-dialog/upload-file-dialog.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MainLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    TableModule,
    BreadcrumbModule,
    CompanyNewsModule
  ],
  providers: [MenuComponent, { provide: HTTP_INTERCEPTORS, useClass: HTTPInterceptor, multi: true }, UploadFileDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
