import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';
import { TasksComponent } from './privateRoutes/components/tasks/tasks.component';
import { DropdownComponent } from './privateRoutes/components/dropdown/dropdown.component';
import { CompleteTasksComponent } from './privateRoutes/components/complete-tasks/complete-tasks.component';
import { TaskComponent } from './privateRoutes/components/task/task.component';
import { AddTaskComponent } from './privateRoutes/components/add-task/add-task.component';
import { EditTaskComponent } from './privateRoutes/components/edit-task/edit-task.component';
import { TaskCompletedComponent } from './privateRoutes/components/task-completed/task-completed.component';
import { AddSubtareaComponent } from './privateRoutes/components/add-subtarea/add-subtarea.component';
import { SubtaskComponent} from './privateRoutes/components/subtask/subtask.component';
import { EditSubtaskComponent } from './privateRoutes/components/edit-subtask/edit-subtask.component';
import { CompleteSubtaskComponent } from './privateRoutes/components/complete-subtask/complete-subtask.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    NavbarComponent,
    RegisterComponent,
    SigninComponent,
    TasksComponent,
    DropdownComponent,
    CompleteTasksComponent,
    TaskComponent,
    AddTaskComponent,
    EditTaskComponent,
    TaskCompletedComponent,
    AddSubtareaComponent,
    SubtaskComponent,
    EditSubtaskComponent,
    CompleteSubtaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
