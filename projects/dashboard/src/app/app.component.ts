import { Component } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'dashboard';
  // public configuration!: Config;
  // public columns!: Columns[];

  // public data = [{
  //   phone: '+1 (934) 551-2224',
  //   age: 20,
  //   address: { street: 'North street', number: 12 },
  //   company: 'ZILLANET',
  //   name: 'Webb',
  //   isActive: false,
  // }, {
  //   phone: '+1 (948) 460-3627',
  //   age: 31,
  //   address: { street: 'South street', number: 12 },
  //   company: 'KNOWLYSIS',
  //   name: 'Heidi Duncan',
  //   isActive: true,
  // }];
  ngOnInit(): void {
    // this.configuration = { ...DefaultConfig };
    // this.configuration.searchEnabled = true;
    // // ... etc.
    // this.columns = [
    //   { key: 'phone', title: 'Phone' },
    //   { key: 'age', title: 'Age' },
    //   { key: 'company', title: 'Company' },
    //   { key: 'name', title: 'Name' },
    //   { key: 'isActive', title: 'STATUS' },
    // ];
  }
}
