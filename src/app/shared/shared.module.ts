import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialsModule } from '../materials/materials.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MaterialsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    RouterModule,
    MaterialsModule,
    ReactiveFormsModule,
    FontAwesomeModule,],
})
export class SharedModule {}
