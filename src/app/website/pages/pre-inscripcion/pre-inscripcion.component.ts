import { Component, OnInit } from '@angular/core';

// Importo el modelo

import { inscripcion } from 'src/app/core/models/modelos.component';

@Component({
  selector: 'app-pre-inscripcion',
  templateUrl: './pre-inscripcion.component.html',
  styleUrls: ['./pre-inscripcion.component.css'],
})
export class PreInscripcionComponent implements OnInit {
  constructor() {}
  identificacion: inscripcion[] = [
    { value: 'C.C', viewValue: 'C.C' },
    { value: 'T.I', viewValue: 'T.I' },
  ];
  denominacion: inscripcion[] = [
    { value: 'Señora', viewValue: 'Señora' },
    { value: 'Señorita', viewValue: 'Señorita' },
    { value: 'Señor', viewValue: 'Señor' },
  ];

  inscripcion: inscripcion[] = [
    { value: 'Estudiante', viewValue: 'Estudiante' },
    { value: 'Profesional', viewValue: 'Profesional' },
  ];

  participar: inscripcion[] = [
    { value: 'Ponente', viewValue: 'Ponente' },
    { value: 'Asistente', viewValue: 'Asistente' },
  ];

  Institucion: inscripcion[] = [
    { value: 'Ponente', viewValue: 'Ponente' },
    { value: 'Asistente', viewValue: 'Asistente' },
  ];

  ngOnInit(): void {}
}
