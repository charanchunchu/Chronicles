import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ScrollService } from './shared/ScrollService';
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './loader/loader.component';
import { PageEntranceComponent } from './page-entrance/page-entrance.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidenavComponent,
    LoginComponent,
    LoaderComponent,
    PageEntranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
