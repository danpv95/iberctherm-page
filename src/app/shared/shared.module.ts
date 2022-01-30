import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//Components compartidos

//Importo el angular materials
import { MaterialsModule } from '../materials/materials.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, MaterialsModule, ReactiveFormsModule],
  exports: [MaterialsModule],
})
export class SharedModule {}
