import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { routing, appRoutingProviders } from './app.routing';

import { AreaPrincipalComponent } from './components/area-principal/area-principal.component';
import { AreaJavascriptComponent } from './components/area-javascript/area-javascript.component';
import { AreaHtmlComponent } from './components/area-html/area-html.component';
import { AreaCssComponent } from './components/area-css/area-css.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaPrincipalComponent,
    AreaJavascriptComponent,
    AreaHtmlComponent,
    AreaCssComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
