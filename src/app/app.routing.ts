// Importamos los modulos del router

import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Importar componentes

import { AreaPrincipalComponent } from '../app/components/area-principal/area-principal.component'
import { AreaJavascriptComponent } from '../app/components/area-javascript/area-javascript.component'
import { AreaHtmlComponent } from '../app/components/area-html/area-html.component'
import { AreaCssComponent } from '../app/components/area-css/area-css.component'


// Array de rutas

const appRoutes: Routes = [

    { path: 'area-principal', component: AreaPrincipalComponent },
    { path: 'area-javascript', component: AreaJavascriptComponent },
    { path: 'area-html', component: AreaHtmlComponent },
    { path: 'area-css', component: AreaCssComponent }
]


// Exportamos el modulo de rutas

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)