import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NavToolsComponent } from './nav-tools/nav-tools.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full',
      },
      {
        path: 'nav-tools',
        component: NavToolsComponent,
      },
      {
        path: 'status',
        component: StatusComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
