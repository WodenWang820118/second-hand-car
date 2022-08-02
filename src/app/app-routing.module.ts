import { MainpageComponent } from './components/mainpage/mainpage.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
  {path: 'mainpage', component: MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
