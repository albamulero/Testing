import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Importamos el modulo http del paquete http Angular
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { routing, appRoutingProviders } from './app.routing';

import { AreaJavascriptComponent } from './components/area-javascript/area-javascript.component';
import { AreaHtmlComponent } from './components/area-html/area-html.component';
import { AreaCssComponent } from './components/area-css/area-css.component';
import { SliderComponent } from './components/slider/slider.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { AreaCursosComponent } from './components/area-cursos/area-cursos.component';
import { AnyadirCursosComponent } from './components/anyadir-cursos/anyadir-cursos.component';
import { AnyadirTemasComponent } from './components/anyadir-temas/anyadir-temas.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaJavascriptComponent,
    AreaHtmlComponent,
    AreaCssComponent,
    SliderComponent,
    RegistroComponent,
    LoginComponent,
    AreaCursosComponent,
    AnyadirCursosComponent,
    AnyadirTemasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
