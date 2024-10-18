import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VehiculoService } from './services/vehiculo.service';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [VehiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
