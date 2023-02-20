import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from './main-layout/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './main-layout/header/header.component';
import { HomeComponent } from './main-layout/home/home.component';
import { SidenavComponent } from './main-layout/sidenav/sidenav.component';
import { AppInfoComponent } from './mobile-cms/app-info/app-info.component';
import { CreateAppComponent } from './mobile-cms/create-app/create-app.component';
import { CreateNewsComponent } from './mobile-cms/create-news/create-news.component';
import { CreateTextComponent } from './mobile-cms/create-text/create-text.component';
import { EditAppComponent } from './mobile-cms/edit-app/edit-app.component';
import { EditNewsComponent } from './mobile-cms/edit-news/edit-news.component';
import { EditTextComponent } from './mobile-cms/edit-text/edit-text.component';

const editApp = 'edit-app/:appid';
const createApp = 'create-app';
const appInfo = 'app-info';
const createNews = 'create-news';
// const editNews = 'edit-news/:id'
const editNews = 'edit-news/:newsid';
const createText = 'create-text';
const editText = 'edit-text'
export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home/app-info',
    pathMatch: 'full',
  },
  { path: 'home', redirectTo: '/home/app-info', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      { path: createApp, component: CreateAppComponent,
      data: {
        breadcrumb: 'Create App'
      },
      },
      {
        path: appInfo, component: AppInfoComponent,
        data: {
          breadcrumb: 'List App'
        },
        // children:[
        //   {
        //       path: 'edit-app/:id',
        //       component: EditAppComponent,
        //       data: {
        //         breadcrumb: 'Edit App'
        //       },
        //   }
        // ]
      },
      {
        path: editApp,
        component: EditAppComponent,
        children: [
          // { path: '', redirectTo: 'edit-app', pathMatch: 'full'},
          {
            path: createNews,
            component: CreateNewsComponent,
            data: {
              breadcrumb: 'Create News'
            }
          },
          {
            path: editNews,
            component: EditNewsComponent,
            data: {
              breadcrumb: 'Edit News'
            }
          },
        ],
        data: {
          breadcrumb: 'Edit App',
        },
      },
      // {
      //   path: 'create-news',
      //   component: CreateNewsComponent,
      //   data: {
      //     breadcrumb: 'Create News'
      //   },
      // },
      // {
      //   // path: 'edit-news/:newsid',
      //   path: editNews,
      //   component: EditNewsComponent,
      //   data: {
      //     breadcrumb: 'Edit News'
      //   },
      // },
      {
        path: createText,
        component: CreateTextComponent,
        data: {
          breadcrumb: 'Create Text'
        },
      },
      {
        path: editText,
        component: EditTextComponent,
        data: {
          breadcrumb: 'Create Text'
        },
      },
    ]
  },


  // {
  //   path:'breadcrumb', component: BreadcrumbComponent
  // },
  {
    path: 'side-menu',
    loadChildren: () => import('sidenav/Module').then(m => m.SidebarModule)
  },
  // {
  //   path: 'sidenav',
  //   component: SidenavComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'd-table',
  //   loadChildren: () => import('dashboard/Module').then(m => m.SampleModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES,
    {
      preloadingStrategy: PreloadAllModules,
      useHash: true
  })],
  // imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
