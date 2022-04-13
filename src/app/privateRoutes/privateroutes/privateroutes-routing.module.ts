import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from '../components/add-task/add-task.component';
import { CompleteTasksComponent } from '../components/complete-tasks/complete-tasks.component';
import { TasksComponent } from '../components/tasks/tasks.component';
import { PrivateroutesComponent } from './privateroutes.component';

const routes: Routes = [{ path: '', component: PrivateroutesComponent, children:[
  {path:'tasks', component: TasksComponent},
  {path:'completeTasks', component: CompleteTasksComponent}
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateroutesRoutingModule { }
