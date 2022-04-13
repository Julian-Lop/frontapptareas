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
    AddTaskComponent
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
