import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'checklist',
    pathMatch: 'full'
  },
  {
    path: 'checklist', loadChildren: () => import('./checklist/checklist.module').then(m => m.ChecklistModule)
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
