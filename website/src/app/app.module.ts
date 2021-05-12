import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleriaComponent } from './galleria/galleria.component';
import { ContattiComponent } from './contatti/contatti.component';
import { OrariComponent } from './orari/orari.component';
import { LuogoComponent } from './luogo/luogo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleriaComponent,
    ContattiComponent,
    OrariComponent,
    LuogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
