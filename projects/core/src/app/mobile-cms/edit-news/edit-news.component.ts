import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { GetNewsService } from '../../services/get-news.service';
import { EditNewsService } from '../../services/edit-news.service';
import { GetCmsService } from '../../services/get-cms.service';

type NewType = Observable<string[]>;

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {
  // appid = JSON.parse(localStorage.getItem('Id') || '{}');
  appid = this.actRoute.snapshot.params['appid'];
  // appid : string;
  id = this.actRoute.snapshot.params['newsid'];
  editNewsForm: FormGroup;
  showTexarea = false;
  showAddNewValue = false;
  inputType = 'text';
  separatorKeysCodes: number[] = [ENTER, COMMA];
  languageCtrl = new FormControl();
  filteredLanguages: NewType;
  languages: string[] = [];
  // allLanguages: string[] = ['en', 'de', 'fr', 'ar', 'zh'];
  allLanguages: [];
  message: any;
  newsId: string;
  newsTitle: string;
  selected: string;
  disabled: boolean = true;
  appIdCtrl: FormControl;
  @ViewChild('languageInput') languageInput: ElementRef<HTMLInputElement>;
  constructor(private fb: FormBuilder, private getNewsService: GetNewsService, private router: Router, public actRoute: ActivatedRoute, private editNewsService: EditNewsService, private getCmsService: GetCmsService) {
    this.editNewsForm = this.fb.group({
      newstitle: ['', Validators.required],
      appid: ['', Validators.required],
      language_names: ['', Validators.required],
      body: ['', Validators.required],
    });
    // this.filteredLanguages = this.languageCtrl.valueChanges.pipe(
    //   startWith(null),
    //   map((language: string | null) => (language ? this._filter(language) : this.allLanguages.slice())),
    // );
  }

  ngOnInit(): void {
    console.log("app id",this.appid)
    console.log(this.actRoute)
    this.assignNewsId();
    this.getNewsDetails();
    this.appIdCtrl = new FormControl({ value: '', disabled: this.disabled })
  }
  assignNewsId() {
    // this.newsId = this.id.slice(1);
    this.newsId = this.id
    // console.log("News Id without colon " + this.newsId);
    console.log("News Id " + this.newsId);
  }
  getNewsDetails() {
    this.getNewsService.getNewsByNewsId(this.newsId).subscribe((res: any) => {
      this.editNewsForm.controls['newstitle'].setValue(res.newstitle)
      this.newsTitle = res.newstitle
      this.editNewsForm.controls['body'].setValue(res.body)
      this.editNewsForm.controls['appid'].setValue(res.appid)
      this.appid = res.appid
      this.getProjectdetails();
      console.log(this.appid)
      this.editNewsForm.controls['language_names'].setValue(res.language)
      // To set selected value
      this.selected = res.language
      console.log("selected",this.selected)
    })
  }
  getProjectdetails() {
    this.getCmsService.getAppById(this.appid).subscribe((res: any) => {
      console.log(res.languages)
      this.allLanguages = res.languages
    })
  }
  updateNews() {

    const formData = this.editNewsForm.getRawValue();
    console.log(formData)
    const payload = {
      newstitle: formData.newstitle,
      language: formData.language_names,
      appid: formData.appid,
      body: formData.body,
    }
    console.log(payload)
    this.editNewsService.editNews(this.newsId, payload).subscribe((res: any) => {
      console.log(res)
      this.router.navigate(['home/edit-app/'+this.appid]);
    })
  }
  resetInput(formName: string | (string | number)[]) {
    this.editNewsForm.get(formName)?.reset();
  }
  // /**
  //    * Based on Type Selection show fields
  //    */
  //  public onSelectChangeType(type: any) {
  //   const checkForTypeText = type.value === 'Long text' || type.value === 'Text';
  //   if (!checkForTypeText) {
  //     this.resetInput('descriptionen');
  //     this.resetInput('descriptionde');
  //   }

  //   type.value === 'Dropdown'
  //     ? ((this.showAddNewValue = true), (this.showTexarea = false), this.resetInput('descriptionen'))
  //     : (this.showAddNewValue = false);
  //   type.value === 'Integer' || type.value === 'Float' ? (this.inputType = 'number') : (this.inputType = 'text');
  //   type.value === 'Long text' ? ((this.showTexarea = true), this.resetInput('descriptionen')) : (this.showTexarea = false);
  // }
  // resetInput(formName: string | (string | number)[]) {
  //   this.editNewsForm.get(formName)?.reset();
  // }
  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our language
  //   if (value) {
  //     this.languages.push(value);
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();

  //   this.languageCtrl.setValue(null);
  //   console.log(event)

  // }

  // remove(language: string): void {
  //   const index = this.languages.indexOf(language);

  //   if (index >= 0) {
  //     this.languages.splice(index, 1);
  //   }
  // }

  // selected(event: MatAutocompleteSelectedEvent): void {
  //   console.log(event.option.viewValue)
  //   this.languages.push(event.option.viewValue);
  //   console.log(this.languages)
  //   this.languageInput.nativeElement.value = '';
  //   this.languageCtrl.setValue(null);
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.allLanguages.filter(language => language.toLowerCase().includes(filterValue));
  // }
  // createCmsApp() {

  //   const formData = this.editNewsForm.getRawValue();
  //   console.log(formData)
  //   const payload = {
  //     name: formData.name,
  //     division: formData.division,
  //     languages: this.languages,
  //     email: formData.email,
  //     webpage: formData.website,
  //     phone: formData.phone,
  //     fax: formData.fax,
  //     responsibilityinformation: formData.responsibility_information,
  //     hrbinformation: formData.hrb_information
  //   }
  //   console.log(payload)
  //   this.createCmsService.CreateApp(payload).subscribe((res: any) => {
  //     console.log(res)
  //     this.router.navigate(['/home/app-info'])
  //   })
  // }

}