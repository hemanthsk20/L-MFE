import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyNewsRoutingModule } from './company-news-routing.module';
import { CreateCompanyNewsComponent } from './create-company-news/create-company-news.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { A11yModule } from '@angular/cdk/a11y';
import { UploadFileDialogComponent } from './upload-file-dialog/upload-file-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    CreateCompanyNewsComponent,
    UploadFileDialogComponent
  ],
  imports: [
    CommonModule,
    CompanyNewsRoutingModule,
    RouterModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    A11yModule,
    MatDialogModule,
    MatTabsModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule
  ],
  exports: [CreateCompanyNewsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CompanyNewsModule { }
