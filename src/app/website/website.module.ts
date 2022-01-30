
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from './../shared/shared.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { PreInscripcionComponent } from './pages/pre-inscripcion/pre-inscripcion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { AutoresComponent } from './pages/autores/autores.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { LayoutComponent } from './components/layout/layout.component';

import { MaterialsModule } from './../materials/materials.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    EventosComponent,
    PagosComponent,
    AutoresComponent,
    IngresoComponent,
    RegistroComponent,
    PreInscripcionComponent,
  ],
  imports: [CommonModule, WebsiteRoutingModule, SharedModule],
})
export class WebsiteModule {}
