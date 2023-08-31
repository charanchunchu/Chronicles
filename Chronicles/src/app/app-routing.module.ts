import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './loader/loader.component';
import { PageEntranceComponent } from './page-entrance/page-entrance.component';


const routes: Routes = [
  { path: '', component: PageEntranceComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loader', component: LoaderComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'PageEntrance', component: PageEntranceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
