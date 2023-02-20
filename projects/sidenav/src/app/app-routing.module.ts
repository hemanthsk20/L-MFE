import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiebherrMenuComponent } from './sidebar/liebherr-menu/liebherr-menu.component';
import { MenuComponent } from './sidebar/menu/menu.component';

const routes: Routes = [
  {
  path: '',
  component: LiebherrMenuComponent,
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
