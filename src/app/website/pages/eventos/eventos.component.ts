import { Component, OnInit } from '@angular/core';

import { cronograma } from 'src/app/core/models/cronograma.models';

const ELEMENT_DATA: cronograma[] = [
  {
    dia: '12 de octubre',
    hora: '8:am - 10 am',
    actividad: 'Registro de ponentes',
    ingreso: 'https://www.utp.edu.co/',
  },
  {
    dia: '12 de octubre',
    hora: '10 am - 12 pm',
    actividad: 'apertura del evento',
    ingreso: 'https://www.utp.edu.co/',
  },
  {
    dia: '12 de octubre',
    hora: '2 pm - 4pm',
    actividad: 'charla magistral',
    ingreso: 'https://www.utp.edu.co/',
  },
  {
    dia: '13 de octubre',
    hora: '2 pm - 4pm',
    actividad: 'poster virtuales',
    ingreso: 'https://www.utp.edu.co/',
  },
  {
    dia: '13 de octubre',
    hora: '2 pm - 4pm',
    actividad: 'ponencias',
    ingreso: 'https://www.utp.edu.co/',
  },
  {
    dia: '13 de octubre',
    hora: '2 pm - 4pm',
    actividad: 'ponencias',
    ingreso: 'https://www.utp.edu.co/',
  },
  {
    dia: '14 de octubre',
    hora: '2 pm - 4pm',
    actividad: 'ponencias',
    ingreso: 'https://www.utp.edu.co/',
  },
  {
    dia: '14 de octubre',
    hora: '2 pm - 4pm',
    actividad: 'ponencias',
    ingreso: 'https://www.utp.edu.co/',
  },
  {
    dia: '15 de octubre',
    hora: '2 pm - 4pm',
    actividad: 'ponencias',
    ingreso: 'https://www.utp.edu.co/',
  },
  {
    dia: '15 de octubre',
    hora: '2 pm - 4pm',
    actividad: 'ponencias',
    ingreso: 'https://www.utp.edu.co/',
  },
];

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {
  displayedColumns: string[] = ['dia', 'hora', 'actividad', 'ingreso'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
