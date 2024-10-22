import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VehiculoService } from './services/vehiculo.service';
import {  HttpClientModule } from '@angular/common/http';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    PeopleListComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [VehiculoService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
