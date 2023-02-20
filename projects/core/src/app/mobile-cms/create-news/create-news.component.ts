import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateNewsService } from '../../services/create-news.service';
import { map, startWith } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Location } from '@angular/common';
import { GetCmsService } from '../../services/get-cms.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {
  createNewsForm: FormGroup;
  showTexarea = false;
  showAddNewValue = false;
  inputType = 'text';
  separatorKeysCodes: number[] = [ENTER, COMMA];
  languageCtrl = new FormControl();
  filteredLanguages: Observable<string[]>;
  languages: string[] = [];
  allLanguages: string[] = ['en', 'de', 'fr', 'ar', 'zh'];
  message: any;
  appid : any;
  appidwoquotes: any;
  disabled: boolean = true;
  appIdCtrl: FormControl;
  @ViewChild('languageInput') languageInput: ElementRef<HTMLInputElement>;
  constructor(private fb: FormBuilder, private createNewsService: CreateNewsService, private router: Router, private location: Location, private getCmsService: GetCmsService) { 
    this.createNewsForm = this.fb.group({
      newstitle: ['', Validators.required],
      language_names: ['', Validators.required],
      appid: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log("Create-news",this.router)
    this.getLanguagesByAppId();
    this.appIdCtrl = new FormControl({value: '', disabled: this.disabled})
  }
  getLanguagesByAppId(){
    this.appid = localStorage.getItem('Id');
    console.log("id with quotes"+this.appid)
    this.appidwoquotes = this.appid.replace(/"([^"]+(?="))"/g, '$1')
    console.log("id without quotes"+ this.appidwoquotes)
    this.getCmsService.getAppById(this.appidwoquotes).subscribe((res: any) => {
      console.log(res);
      console.log(res.languages)
      this.allLanguages= res.languages
      this.createNewsForm.controls['appid'].setValue(res.id)
    })
  }
createNews() {

  const formData = this.createNewsForm.getRawValue();
  console.log(formData)
  const payload = {
    newstitle: formData.newstitle,
    appid: formData.appid,
    body: formData.body,
    language: formData.language_names,
  }
  console.log(payload)
  this.createNewsService.CreateNews(payload).subscribe((res: any) => {
    console.log(res)
    // this.router.navigate(['/home/edit-app/:'+id])
    // this.location.back();
  })
}
}
