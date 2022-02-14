import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NavToolsComponent } from './nav-tools/nav-tools.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [LayoutComponent, NavToolsComponent, StatusComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
