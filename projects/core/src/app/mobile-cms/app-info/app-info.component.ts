import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild, AfterViewInit, ChangeDetectorRef, ViewEncapsulation, } from '@angular/core';
import { APIDefinition, API, Config, Columns, DefaultConfig, Pagination } from 'ngx-easy-table';
import { PageEvent } from '@angular/material/paginator';
import { TableSortService } from 'projects/shared-lib/src/lib/table-sort.service';
import { PaginationAppInfoList } from '../pagination-interfaces';
import { GetCmsService } from '../../services/get-cms.service';
import { Router } from '@angular/router';
import { DeleteAppService } from '../../services/delete-app.service';
import { SharedLibService } from 'projects/shared-lib/src/public-api';
// import { PaginationAppInfoList } from '../app-info.interfaces';
// interface Cms {
//   id: string
//   name: string;
//   division: string;
//   languages: string;
//   email: string;
//   website: string;
//   phone: string;
//   fax: string;
// }
export const columns: Columns[] = [
  { key: 'name', title: 'Name' },
  { key: 'division', title: 'Division' },
  { key: 'languages', title: 'Languages' },
  { key: 'email', title: 'Email' },
  { key: 'website', title: 'Website' },
  { key: 'phone', title: 'Phone' },
  { key: 'fax', title: 'Fax' },
];

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppInfoComponent implements OnInit, AfterViewInit {
  @ViewChild('nameHeaderActionTemplate', { static: true })
  nameHeaderActionTemplate: TemplateRef<any>;
  @ViewChild('divisionHeaderActionTemplate', { static: true })
  divisionHeaderActionTemplate: TemplateRef<any>;
  @ViewChild('languagesHeaderActionTemplate', { static: true })
  languagesHeaderActionTemplate: TemplateRef<any>;
  @ViewChild('emailHeaderActionTemplate', { static: true })
  emailHeaderActionTemplate: TemplateRef<any>;
  @ViewChild('websiteHeaderActionTemplate', { static: true })
  websiteHeaderActionTemplate: TemplateRef<any>;
  @ViewChild('faxHeaderActionTemplate', { static: true })
  faxHeaderActionTemplate: TemplateRef<any>;
  @ViewChild('phoneHeaderActionTemplate', { static: true })
  phoneHeaderActionTemplate: TemplateRef<any>;
  @ViewChild('levelHeaderActionTemplate', { static: true })
  levelHeaderActionTemplate: TemplateRef<any>;
  // @ViewChild('responsibiltyInformationHeaderActionTemplate', { static: true })
  // responsibiltyInformationHeaderActionTemplate: TemplateRef<any>;
  // @ViewChild('hrdInformationHeaderActionTemplate', { static: true })
  // hrdInformationHeaderActionTemplate: TemplateRef<any>;
  @ViewChild('table', { static: true }) table: APIDefinition;
  @ViewChild('actionTpl', { static: true }) actionTpl: TemplateRef<any>;
  @ViewChild('actionTpl1', { static: true }) actionTpl1: TemplateRef<any>;
  public columns: Columns[];
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
  id: string;
  //   pagination: PaginationAppInfoList = {
  //     limit: 10,
  //     offset: 1,
  //     count: -1,
  //     sort: 'section'
  // };
  constructor(private cdr: ChangeDetectorRef, private tableSortService: TableSortService, private getCmsService: GetCmsService, private router: Router, private deleteAppService: DeleteAppService, private sharedLibService: SharedLibService) { }
  selectedLevels = new Set<string>(['ASC', 'DESC', 'RESET']);
  name = { key: '', title: '' };
  ngOnInit(): void {
    this.setTable();
    this.getcmsApps();
  }
  ngAfterViewInit(): void {
    this.paginationTotalItems = this.table.apiEvent({
      type: API.getPaginationTotalItems,
    });
    this.cdr.detectChanges();
  }
  //set table
  setTable() {
    this.setTableConfigurations();
    this.columns = [
      { key: 'name', title: 'Name', headerActionTemplate: this.levelHeaderActionTemplate },
      { key: 'division', title: 'Division', headerActionTemplate: this.levelHeaderActionTemplate },
      { key: 'languages', title: 'Languages', headerActionTemplate: this.levelHeaderActionTemplate },
      { key: 'email', title: 'Email', headerActionTemplate: this.levelHeaderActionTemplate },
      { key: 'webpage', title: 'Website', headerActionTemplate: this.levelHeaderActionTemplate },
      { key: 'fax', title: 'Fax', headerActionTemplate: this.levelHeaderActionTemplate },
      { key: 'phone', title: 'Phone', headerActionTemplate: this.levelHeaderActionTemplate },
      { key: 'actions', title: 'Actions', cellTemplate: this.actionTpl },
      // { key: 'action', title: 'Actions', cellTemplate: this.actionTpl },
      // { key: 'delete', title: 'Delete', cellTemplate: this.actionTpl1 }
      // { key: 'responsibilty-information', title: 'Responsibilty Information', headerActionTemplate: this.responsibiltyInformationHeaderActionTemplate },
      // { key: 'hrb-information', title: 'Hrd Information', headerActionTemplate: this.hrdInformationHeaderActionTemplate },
      // { key: 'address.street', title: 'Street', headerActionTemplate: this.levelHeaderActionTemplate },
    ];

  }
  // Set table configurations
  setTableConfigurations() {
    this.configuration = { ...DefaultConfig };
    this.configuration.checkboxes = false;
    this.configuration.additionalActions = false;
    this.configuration.fixedColumnWidth = true;
    this.configuration.paginationRangeEnabled = false;
    // this.configuration.selectCell = false;
    this.configuration.selectRow = true;
    // this.configuration.isLoading = true;
  }
  // filter(field: string, event: Event | string): void {
  //   const value = typeof event === 'string' ? event : (event.target as HTMLInputElement).value;
  //   if (field === 'level') {
  //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  //     this.selectedLevels.has(value)
  //       ? this.selectedLevels.delete(value)
  //       : this.selectedLevels.add(value);
  //   }
  //   if (field === 'company') {
  //     this.selectedCompany = value;
  //   }
  //   this.data = [...this.dataCopy].filter(({ level, company }) => {
  //     return (
  //       this.selectedLevels.has(level!) &&
  //       company.toLocaleLowerCase().includes(this.selectedCompany.toLocaleLowerCase())
  //     );
  //   });
  // }
  //   public eventEmitted(filteringValue: any, position?: number): void {
  //     this.tableSortService.headerTableSorting(filteringValue, position);

  //     this.previousValueSelected = this.tableSortService.previousValueSelected;
  //     // this.parseEvent(this.tableSortService.filters);
  //     this.selectedLevels.has(this.tableSortService.filters);
  // }
  // private parseEvent(obj: any): void {
    // if (obj.order !== 'reset') {
    //     this.pagination.limit = obj?.limit ? obj.limit : this.pagination.limit;
    //     this.pagination.offset = obj?.page ? obj.page : this.pagination.offset;
    //     this.pagination.sort = obj ? obj.key : this.pagination.sort;
    //     this.pagination.order = obj ? obj.order : this.pagination.order;
    // } else {
    //     this.pagination = {
    //         count: this.pagination.count,
    //         limit: this.pagination.limit,
    //         offset: obj?.page || this.pagination.offset
    //     };
    // }

    // this.pagination = { ...this.pagination };

    // this.store.dispatch(new GetUsers(this.pagination));
  // }

  

  paginationEvent($event: PageEvent): void {
    this.pagination = {
      ...this.pagination,
      limit: $event.pageSize,
      offset: $event.pageIndex + 1,
      count: $event.length,
    };
  }
  onChange(event: Event): void {
    this.table.apiEvent({
      type: API.onGlobalSearch,
      value: (event.target as HTMLInputElement).value,
    });
  }
  getcmsApps() {
    this.getCmsService.getApps().subscribe((res: any) => {
      this.data = res;
      // console.log(res)
      this.dataCopy = this.data
      console.log("res",this.dataCopy)
    }) 
  }
  // eventEmitted($event: { event: string; value: any }): void {
  //   this.clicked = JSON.stringify($event);
  //   this.appid = $event.value.row.id
  //   console.log('$event', $event);
  //   // console.log('id', this.appid);
  //   if($event.value.key === 'edit'){
  //     // console.log($event.value.key);
  //     this.editAppById();
  //   }else
  //   console.log(2)
  //   if($event.value.key === 'delete'){
  //     // console.log($event.value.key);
  //     // this.deleteApp();
  //   }
  // }
  editAppById(row: any): void {
    console.log("row edit",row.id)
    // this.id = row.id
    this.sharedLibService.setId(row.id)
    // console.log("id="+this.sharedLibService.appId)
    this.router.navigate(['home/edit-app/'+row.id])
    this. getcmsApps()
  }
  deleteApp(row: any){
    console.log("row delete",row.id)
      this.deleteAppService.deleteAppById(row.id).subscribe((res: any) => {
        console.log(res)
        this. getcmsApps()
      })
  }
  addNewApp(){
    this.router.navigate(['/home/create-app'])
  }
  updateApp(){
    this.router.navigate(['/home/edit-app'+ this.appid])
    this. getcmsApps()
    // this.router.navigate(['/home/app-info/edit-app'+ this.appid])
  }
}
