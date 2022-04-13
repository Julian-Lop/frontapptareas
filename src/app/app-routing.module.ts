import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'', component: LandingpageComponent},
  {path:'register', component: RegisterComponent},
  {path:'signin', component: SigninComponent},
  {path: 'privateroutes', loadChildren: () => import('./privateRoutes/privateroutes/privateroutes.module').then(m => m.PrivateroutesModule), canActivate:[AuthGuard]},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
