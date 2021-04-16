import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// pages
import { LoginPage } from './pages/login/login.page';
import { GestionPage } from './pages/gestion/gestion.page';

// components
import { UserComponent } from './components/user/user.component';
import { ProjectComponent } from './components/project/project.component';
import { OrganismeComponent } from './components/organisme/organisme.component';

// services
import { UserService } from './services/user.service';
import { ProjectService } from './services/project.service';
import { OrganismeService } from './services/organisme.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    GestionPage,
    UserComponent,
    ProjectComponent,
    OrganismeComponent
  ],

  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService,
    ProjectService,
    OrganismeService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
