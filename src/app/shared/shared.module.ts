import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// font AwsomeModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Components compartidos
//Importo el angular materials
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
  exports: [MaterialsModule, FontAwesomeModule],
})
export class SharedModule {}
