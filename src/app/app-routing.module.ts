import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullListComponent } from './components/full-list/full-list.component'
import { LoginComponent } from '../app/components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'fulllist', pathMatch:"full"}, 
  {path: 'fulllist', component:FullListComponent},
  {path: 'login', component:LoginComponent}
];
//insert done and today componenets here 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
