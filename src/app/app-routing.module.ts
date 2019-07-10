import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullListComponent } from './components/full-list/full-list.component'

const routes: Routes = [
  {path: '', redirectTo: 'fulllist', pathMatch:"full"}, 
  {path: 'fulllist', component:FullListComponent}
];
//insert done and today componenets here 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
