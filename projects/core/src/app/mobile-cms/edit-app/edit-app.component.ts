import { Component, OnInit, ElementRef, ViewChild, SimpleChanges } from '@angular/core';
import { ChangeDetectionStrategy, TemplateRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
// import {Component, ElementRef, ViewChild} from '@angular/core';
// import {FormControl} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CreateCmsService } from '../../services/create-cms.service';
import { EditAppService } from '../../services/edit-app.service';
import { GetCmsService } from '../../services/get-cms.service';
import { ActivatedRoute } from '@angular/router';

import { APIDefinition, API, Config, Columns, DefaultConfig, Pagination } from 'ngx-easy-table';
import { PageEvent } from '@angular/material/paginator';
import { TableSortService } from 'projects/shared-lib/src/lib/table-sort.service';
import { PaginationAppInfoList } from '../pagination-interfaces';
import { Router } from '@angular/router';
import { DeleteAppService } from '../../services/delete-app.service';
import { GetNewsService } from '../../services/get-news.service';
import { SharedLibService } from 'projects/shared-lib/src/public-api';

export const newscolumns: Columns[] = [
  { key: 'newstitle', title: 'News Title' },
  { key: 'language', title: 'Language' },
  // { key: 'appid', title: 'App ID' },
];
export const textscolumns: Columns[] = [
  { key: 'title', title: 'Title' },
  // { key: 'appid', title: 'App ID' },
];
@Component({
  selector: 'app-edit-app',
  templateUrl: './edit-app.component.html',
  styleUrls: ['./edit-app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditAppComponent implements OnInit, AfterViewInit {
  id = this.actRoute.snapshot.params['appid'];
  // id = JSON.parse(localStorage.getItem('Id') || '{}');
  editAppForm: FormGroup;
  showTexarea = false;
  showAddNewValue = false;
  inputType = 'text';
  separatorKeysCodes: number[] = [ENTER, COMMA];
  languageCtrl = new FormControl();
  filteredLanguages: Observable<string[]>;
  languages: string[] = [];
  allLanguages: string[] = ['en', 'de', 'fr', 'ar', 'zh'];
  message: any;
  appId: any;
  appName: any;
  showNews: boolean = false;
  @ViewChild('languageInput') languageInput: ElementRef<HTMLInputElement>;

  // @ViewChild('nameHeaderActionTemplate', { static: true })
  // nameHeaderActionTemplate: TemplateRef<any>;
  // @ViewChild('divisionHeaderActionTemplate', { static: true })
  // divisionHeaderActionTemplate: TemplateRef<any>;
  // @ViewChild('languagesHeaderActionTemplate', { static: true })
  // languagesHeaderActionTemplate: TemplateRef<any>;
  // @ViewChild('emailHeaderActionTemplate', { static: true })
  // emailHeaderActionTemplate: TemplateRef<any>;
  // @ViewChild('websiteHeaderActionTemplate', { static: true })
  // websiteHeaderActionTemplate: TemplateRef<any>;
  // @ViewChild('faxHeaderActionTemplate', { static: true })
  // faxHeaderActionTemplate: TemplateRef<any>;
  // @ViewChild('phoneHeaderActionTemplate', { static: true })
  // phoneHeaderActionTemplate: TemplateRef<any>;
  @ViewChild('levelHeaderActionTemplate', { static: true })
  levelHeaderActionTemplate: TemplateRef<any>;
  // @ViewChild('responsibiltyInformationHeaderActionTemplate', { static: true })
  // responsibiltyInformationHeaderActionTemplate: TemplateRef<any>;
  // @ViewChild('hrdInformationHeaderActionTemplate', { static: true })
  // hrdInformationHeaderActionTemplate: TemplateRef<any>;
  @ViewChild('table', { static: true }) table: APIDefinition;
  @ViewChild('actionTpl', { static: true }) actionTpl: TemplateRef<any>;
  // @ViewChild('actionTpl1', { static: true }) actionTpl1: TemplateRef<any>;
  public newscolumns: Columns[];
  public textscolumns: Columns[];
  // data: Cms[] = [];
  // dataCopy: Cms[] = [];
  data: [] = [];
  dataCopy: [] = [];
  configuration: Config;
  // selectedLevels = new Set<string>(['High', 'Medium', 'Low']);
  selectedCompany = '';
  public paginationTotalItems: number;
  pagination: Pagination;
  previousValueSelected = '';
  editRow: number;
  public clicked: string;
  appid: string;
  newsid: string;

  constructor(private fb: FormBuilder,
    private createCmsService: CreateCmsService,
    private getCmsService: GetCmsService,
    private editAppService: EditAppService,
    public actRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private tableSortService: TableSortService,
    private router: Router,
    private deleteAppService: DeleteAppService,
    private getNewsService: GetNewsService,
    private sharedLibService: SharedLibService) {
    this.editAppForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\]*$')]],
      division: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\]*$')]],
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
    router.events.subscribe((val) => {
      // see also 
      this.showHideNews(val);
    });
  }
  selectedLevels = new Set<string>(['ASC', 'DESC', 'RESET']);
  name = { key: '', title: '' };
  ngOnInit(): void {
    // this.getcmsApps();
    this.sliceAppId();
    this.getProjectdetails();
    this.getNews();
    this.setNewsTable();
    this.setTextTable();
    this.getText();
    console.log(" Params", this.actRoute)
    console.log(this.actRoute.snapshot.params['appid'])
    //   this.actRoute.paramMap.subscribe(params => { 
    //     this.id = params.get('id'); 
    //     console.log("apppp"+this.id)
    // });
    console.log(this.appId)

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("Changes:", this.actRoute)
  }
  ngAfterViewInit(): void {
    this.paginationTotalItems = this.table.apiEvent({
      type: API.getPaginationTotalItems,
    });
    this.cdr.detectChanges();
  }
  showHideNews(val: any) {
    if (val.url !== undefined && (val.url.includes("create-news") || val.url.includes("edit-news"))) {
      if (this.showNews === false)
        this.showNews = true;
    }
    else {
      if (this.showNews === true)
        this.showNews = false
    }
    console.log("value", val.url)
  }
  sliceAppId() {
    console.log(this.id)
    this.appId = this.id
    console.log("App Id without colon " + this.appId);
  }
  getProjectdetails() {
    this.getCmsService.getAppById(this.appId).subscribe((res: any) => {
      console.log("languahes" + res.languages)
      this.editAppForm.controls['name'].setValue(res.name)
      this.editAppForm.controls['division'].setValue(res.division)
      this.languages = res.languages;
      this.editAppForm.controls['language_names'].setValue(res.languages)
      this.editAppForm.controls['email'].setValue(res.email)
      this.editAppForm.controls['website'].setValue(res.webpage)
      this.editAppForm.controls['phone'].setValue(res.phone)
      this.editAppForm.controls['fax'].setValue(res.fax)
      this.editAppForm.controls['responsibility_information'].setValue(res.responsibilityinformation)
      this.editAppForm.controls['hrb_information'].setValue(res.hrbinformation)
      this.appName = res.name
      console.log(res);
      console.log(res.languages)
    })
  }
  /*
   * Based on Type Selection show fields
   */
  // public onSelectChangeType(type: any) {
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

  resetInput(formName: string | (string | number)[]) {
    this.editAppForm.get(formName)?.reset();
  }
  clear() {
    this.languages = [];
    this.languageInput.nativeElement.value = '';
  }
  updateChips(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our language
    if (value) {
      this.languages.push(value);
      console.log(value)
    }
    // Clear the input value
    event.chipInput!.clear();

    this.languageCtrl.setValue(null);

  }

  remove(language: string): void {
    const index = this.languages.indexOf(language);

    if (index >= 0) {
      this.languages.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.languages.push(event.option.viewValue);
    this.languageInput.nativeElement.value = '';
    this.languageCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allLanguages.filter(language => language.toLowerCase().includes(filterValue));
  }
  editCmsApp() {
    const formData = this.editAppForm.getRawValue();
    console.log(formData)
    console.log("languages", this.languages)
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
    this.editAppService.editApp(this.appId, payload).subscribe((res: any) => {
      console.log(res)
      localStorage.clear;
      this.router.navigate(['/home/app-info'])
    })
  }


  //set News table
  setNewsTable() {
    this.setNewsTableConfigurations();
    this.newscolumns = [
      { key: 'newstitle', title: 'News Title', headerActionTemplate: this.levelHeaderActionTemplate },
      { key: 'language', title: 'Language', headerActionTemplate: this.levelHeaderActionTemplate },
      { key: 'actions', title: 'Actions', cellTemplate: this.actionTpl },
      // { key: 'delete', title: 'Delete', cellTemplate: this.actionTpl1 }
    ];
  }
  // Set table configurations
  setNewsTableConfigurations() {
    this.configuration = { ...DefaultConfig };
    this.configuration.checkboxes = false;
    this.configuration.additionalActions = false;
    this.configuration.fixedColumnWidth = true;
    this.configuration.paginationRangeEnabled = false;
    this.configuration.selectCell = false;
    // this.configuration.isLoading = true;
  }
  paginationNewsEvent($event: PageEvent): void {
    this.pagination = {
      ...this.pagination,
      limit: $event.pageSize,
      offset: $event.pageIndex + 1,
      count: $event.length,
    };
  }
  onNewsChange(event: Event): void {
    this.table.apiEvent({
      type: API.onGlobalSearch,
      value: (event.target as HTMLInputElement).value,
    });
  }
  getNews() {
    console.log(this.appId)
    this.getNewsService.getNewsByAppId(this.appId).subscribe((res: any) => {
      this.data = res.response;
      // console.log(res.response)
      this.dataCopy = this.data
      // console.log("res", this.dataCopy)
    })
  }
  // newseventEmitted($event: { event: string; value: any }): void {
  //   this.clicked = JSON.stringify($event);

  //   this.newsid = $event.value.row.id
  //   console.log('$event', $event);
  //   console.log('id', this.newsid);
  //   // this.sharedLibService.setId(this.newsid) 
  //   if ($event.value.key === 'edit') {
  //     console.log($event.value.key);
  //     this.editNewsById();
  //   } else
  //     console.log(2)
  //   if ($event.value.key === 'delete') {
  //     console.log($event.value.key);
  //     this.deleteNews();
  //   }
  // }
  deleteNews(row: any) {
    console.log("row id for edit news", row.id)
    this.deleteAppService.deleteAppById(row.id).subscribe((res: any) => {
      console.log(res)
    })
    this.getNews()
  }
  editNewsById(row: any): void {
    console.log("row id for edit news", row.id)
    this.newsid = row.id
    // this.id = this.newsid
    // this.router.navigate(['home/edit-app/:'+this.appId+'/edit-news/:'+this.newsid])
    // this.router.navigate(['home//edit-news/:'+this.newsid])
    this.router.navigate([`home/edit-app/${this.appId}/edit-news/${this.newsid}`])
  }
  addNews() {
    // this.router.navigate(['home/edit-app/:'+this.appId+'/create-news'])
    this.showNews = true;
    this.router.navigate([`/home/edit-app/${this.appId}/create-news`], { relativeTo: this.actRoute })
    // thhis.router.navigate(['home/create-news'])
  }

  //Set text table
  setTextTable() {
    this.setTextTableConfigurations();
    this.textscolumns = [
      { key: 'title', title: 'Title', headerActionTemplate: this.levelHeaderActionTemplate },
      { key: 'actions', title: 'Actions', cellTemplate: this.actionTpl },
      // { key: 'delete', title: 'Delete', cellTemplate: this.actionTpl1 }
    ];
  }
  // Set table configurations
  setTextTableConfigurations() {
    this.configuration = { ...DefaultConfig };
    this.configuration.checkboxes = false;
    this.configuration.additionalActions = false;
    this.configuration.fixedColumnWidth = true;
    this.configuration.paginationRangeEnabled = false;
    this.configuration.selectCell = false;
    //   if(!this.dataCopy){
    //  this.configuration.isLoading = true;
    //   }else{
    //     this.configuration.isLoading = false;
    //   }

  }
  paginationTextEvent($event: PageEvent): void {
    this.pagination = {
      ...this.pagination,
      limit: $event.pageSize,
      offset: $event.pageIndex + 1,
      count: $event.length,
    };
  }
  onTextChange(event: Event): void {
    this.table.apiEvent({
      type: API.onGlobalSearch,
      value: (event.target as HTMLInputElement).value,
    });
  }
  getText() {
    // this.getCmsService.getApps().subscribe((res: any) => {
    //   this.data = res;
    //   console.log(res)
    //   this.dataCopy = this.data
    //   console.log("res" + this.dataCopy)
    // })
  }
  texteventEmitted($event: { event: string; value: any }): void {
    this.clicked = JSON.stringify($event);

    this.appid = $event.value.row.id
    console.log('$event', $event);
    console.log('id', this.appid);
    if ($event.value.key === 'edit') {
      console.log($event.value.key);
      this.editTextById();
    } else
      console.log(2)
    if ($event.value.key === 'delete') {
      console.log($event.value.key);
      this.deleteText();
    }
  }
  editTextById(): void {
    this.id = this.appid
    console.log("id=" + this.id)
    this.router.navigate(['home/edit-app/:' + this.id])
  }
  deleteText() {
    this.deleteAppService.deleteAppById(this.appid).subscribe((res: any) => {
      console.log(res)
    })
  }
  addNewText() {
    this.router.navigate(['/home/create-app'])
  }
}

// this.createCmsService.CreateApp(payload).subscribe((res: any) => {
//   console.log(res)
// }, err => {
//   this.message = err.error.detail
//   console.log(this.message)
// })
// console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));