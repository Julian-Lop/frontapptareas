import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateroutesComponent } from './privateroutes.component';

const routes: Routes = [{ path: '', component: PrivateroutesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateroutesRoutingModule { }
