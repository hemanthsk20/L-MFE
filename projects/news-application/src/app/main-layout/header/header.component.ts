import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedLibService } from 'projects/shared-lib/src/lib/shared-lib.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showFlyoutMenu: boolean = false;
  showLanguageMenu: boolean = false;
  showSubmenu: boolean = false;
  showAppLauncher: boolean = false;
  tab : any = 'tab1';
  togglemenu: boolean = false;
  status:boolean = false;
  constructor(public router:Router, private listenerService: SharedLibService) { 
    //  listenerService.registerListener("shell","initialize",function(value: any,obj: object) {
    //     debugger
    //     console.log(value +""+ obj);
    //   });
    //   listenerService.callListener("shell","initialize",{});
  }

  ngOnInit(): void {
  }
  showUserMenuOnClick(){
    this.showFlyoutMenu = !this.showFlyoutMenu; 
    if(this.showLanguageMenu == true || this.showAppLauncher == true){
      this.showLanguageMenu = false
      this.showAppLauncher = false
    } 
  }
  showLanguaesOnClick(){
    this.showLanguageMenu = !this.showLanguageMenu; 
    if(this.showFlyoutMenu == true || this.showAppLauncher == true){
      this.showFlyoutMenu = false
      this.showAppLauncher = false
    }  
  }
  showAppLauncherOnClick(){
    this.showAppLauncher = !this.showAppLauncher;
    if(this.showFlyoutMenu == true || this.showLanguageMenu == true){
      this.showFlyoutMenu = false
      this.showLanguageMenu = false
    } 
  }
}
