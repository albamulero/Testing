// Importamos los modulos del router

import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Importar componentes

import { AreaCursosComponent } from '../app/components/area-cursos/area-cursos.component'
import { AreaTemasComponent } from './components/area-temas/area-temas.component'
import { AreaJavascriptComponent } from '../app/components/area-javascript/area-javascript.component'
import { AreaHtmlComponent } from '../app/components/area-html/area-html.component'
import { AreaCssComponent } from '../app/components/area-css/area-css.component'
import { RegistroComponent } from './components/registro/registro.component'
import { LoginComponent } from './components/login/login.component'
import { AnyadirCursosComponent } from './components/anyadir-cursos/anyadir-cursos.component'
import { AnyadirTemasComponent } from './components/anyadir-temas/anyadir-temas.component'


// Array de rutas

const appRoutes: Routes = [

    { path: 'area-cursos', component: AreaCursosComponent },
    { path: 'area-temas', component: AreaTemasComponent },
    { path: 'area-javascript', component: AreaJavascriptComponent },
    { path: 'area-html', component: AreaHtmlComponent },
    { path: 'area-css', component: AreaCssComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'anyadir-cursos', component: AnyadirCursosComponent },
    { path: 'anyadir-temas', component: AnyadirTemasComponent}
]


// Exportamos el modulo de rutas

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)