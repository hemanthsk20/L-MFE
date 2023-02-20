import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  minimizeSidebar: boolean = false;
  showSubmenu: boolean = false;
  tab: any = 'tab1';
  togglemenu: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  clickEvent() {
    this.minimizeSidebar = !this.minimizeSidebar;
  }
  expandMenu() {
    this.showSubmenu = !this.showSubmenu
  }
  toggleSubmenu(togglemenu: boolean) {
    this.togglemenu = !this.togglemenu
  }
  onClick(check: number) {
    //    console.log(check);
    if (check == 1) {
      this.tab = 'tab1';
    } else if (check == 2) {
      this.tab = 'tab2';
    } else if (check == 3) {
      this.tab = 'tab3';
    } else if (check == 4) {
      this.tab = 'tab4';
    } else if (check == 5) {
      this.tab = 'tab5';
    } else if (check == 6) {
      this.tab = 'tab6';
    } else if (check == 7) {
      this.tab = 'tab7';
    } else if (check == 8) {
      this.tab = 'tab8';
      this.showSubmenu = !this.showSubmenu
    }
    else {
      this.tab = 'tab9';
    }

  }
}
