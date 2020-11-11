import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: "/home", pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
