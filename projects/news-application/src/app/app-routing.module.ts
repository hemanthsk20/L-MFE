import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateCompanyNewsComponent } from './company-news/create-company-news/create-company-news.component';
import { HomeComponent } from './main-layout/home/home.component';
const newsInfo = 'news-info';
const createNews = 'create-news';
const editNews = 'edit-news/:newsid';
export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home/create-news',
    pathMatch: 'full',
  },
  { path: 'home', redirectTo: '/home/create-news', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      { path: createNews, component: CreateCompanyNewsComponent,
      data: {
        breadcrumb: 'Create News'
      },
      },
      // {
      //   path: newsInfo, component: NewsInfoComponent,
      //   data: {
      //     breadcrumb: 'List News'
      //   },
        // children:[
        //   {
        //       path: 'edit-app/:id',
        //       component: EditAppComponent,
        //       data: {
        //         breadcrumb: 'Edit App'
        //       },
        //   }
        // ]
      // },
      // {
      //   path: editApp,
      //   component: EditAppComponent,
      //   data: {
      //     breadcrumb: 'Edit App',
      //   },
      // },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES,
    {
      preloadingStrategy: PreloadAllModules,
      useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
