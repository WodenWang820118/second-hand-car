import { MainpageComponent } from './components/mainpage/mainpage.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationPageComponent } from './components/authentication-page/authentication-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'auth', component: AuthenticationPageComponent},
  {path: 'mainpage', component: MainpageComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
