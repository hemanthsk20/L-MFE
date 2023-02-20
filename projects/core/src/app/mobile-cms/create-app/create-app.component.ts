import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
// import {Component, ElementRef, ViewChild} from '@angular/core';
// import {FormControl} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CreateCmsService } from '../../services/create-cms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-app',
  templateUrl: './create-app.component.html',
  styleUrls: ['./create-app.component.scss']
})
export class CreateAppComponent implements OnInit {
  createAppForm: FormGroup;
  showTexarea = false;
  showAddNewValue = false;
  inputType = 'text';
  separatorKeysCodes: number[] = [ENTER, COMMA];
  languageCtrl = new FormControl();
  filteredLanguages: Observable<string[]>;
  languages: string[] = [];
  allLanguages: string[] = ['en', 'de', 'fr', 'ar', 'zh'];
  message: any;

  @ViewChild('languageInput') languageInput: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder, private createCmsService: CreateCmsService, private router: Router) {
    this.createAppForm = this.fb.group({
      name: ['', Validators.required],
      division: ['', Validators.required],
      language_names: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      website: ['', Validators.required],
      phone: ['', Validators.required],
      fax: ['', Validators.required],
      responsibility_information: ['', [Validators.required]],
      hrb_information: ['', Validators.required]
    });
    this.filteredLanguages = this.languageCtrl.valueChanges.pipe(
      startWith(null),
      map((language: string | null) => (language ? this._filter(language) : this.allLanguages.slice())),
    );
  }

  ngOnInit(): void {
  }

  /**
   * Based on Type Selection show fields
   */
  public onSelectChangeType(type: any) {
    const checkForTypeText = type.value === 'Long text' || type.value === 'Text';
    if (!checkForTypeText) {
      this.resetInput('descriptionen');
      this.resetInput('descriptionde');
    }

    type.value === 'Dropdown'
      ? ((this.showAddNewValue = true), (this.showTexarea = false), this.resetInput('descriptionen'))
      : (this.showAddNewValue = false);
    type.value === 'Integer' || type.value === 'Float' ? (this.inputType = 'number') : (this.inputType = 'text');
    type.value === 'Long text' ? ((this.showTexarea = true), this.resetInput('descriptionen')) : (this.showTexarea = false);
  }
  resetInput(formName: string | (string | number)[]) {
    this.createAppForm.get(formName)?.reset();
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our language
    if (value) {
      this.languages.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.languageCtrl.setValue(null);
    console.log(event)

  }

  remove(language: string): void {
    const index = this.languages.indexOf(language);

    if (index >= 0) {
      this.languages.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.languages.push(event.option.viewValue);
    console.log(this.languages)
    this.languageInput.nativeElement.value = '';
    this.languageCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allLanguages.filter(language => language.toLowerCase().includes(filterValue));
  }
  createCmsApp() {

    const formData = this.createAppForm.getRawValue();
    console.log(formData)
    const payload = {
      name: formData.name,
      division: formData.division,
      languages: this.languages,
      email: formData.email,
      webpage: formData.website,
      phone: formData.phone,
      fax: formData.fax,
      responsibilityinformation: formData.responsibility_information,
      hrbinformation: formData.hrb_information
    }
    console.log(payload)
    this.createCmsService.CreateApp(payload).subscribe((res: any) => {
      console.log(res)
      this.router.navigate(['/home/app-info'])
    })
  }
}

// this.createCmsService.CreateApp(payload).subscribe((res: any) => {
//   console.log(res)
// }, err => {
//   this.message = err.error.detail
//   console.log(this.message)
// })
// console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));