import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NavToolsComponent } from './nav-tools/nav-tools.component';

@NgModule({
  declarations: [LayoutComponent, NavToolsComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
