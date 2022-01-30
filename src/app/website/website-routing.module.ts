import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { AutoresComponent } from './pages/autores/autores.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { HomeComponent } from './pages/home/home.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { PreInscripcionComponent } from './pages/pre-inscripcion/pre-inscripcion.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'autores',
        component: AutoresComponent,
      },
      {
        path: 'evento',
        component: EventosComponent,
      },
      {
        path: 'pagos',
        component: PagosComponent,
      },
      {
        path: 'inscripcion',
        component: PreInscripcionComponent,
      },
      {
        path: 'ingreso',
        component: IngresoComponent,
      },
      {
        path: 'registro',
        component: RegistroComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
