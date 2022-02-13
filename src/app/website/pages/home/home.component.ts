import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { inscripcion } from 'src/app/core/models/modelos.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {



  // tslint:disable-next-line: member-ordering
  organizadores: any[] = [
    {
      name: 'Milton Medina',
      image: 'profeMilton.jpg',
      descripcion: this.translate.instant('profe0'),
      institucion: 'Universidad Tecnologica de Pereira',
      contacto: 'mmedina@utp.edu.co',
    },
    {
      name: 'Jenniffer Bustamante',
      image: 'profe_jennifer.png',
      descripcion: this.translate.instant('profe1'),
      institucion: 'Universidad Tecnologica de Pereira',
      contacto: 'jbustamante@utp.edu.co ',
    },
    {
      name: 'Manuel Pinzón Candelario',
      image: 'profeManuel.jpg',
      descripcion: this.translate.instant('profe2'),
       institucion: 'Servicio Nacional de Aprendizaje SENA',
      contacto: 'candelario@utp.edu.co ',
    },
    {
      name: 'Jaime Andrés Pérez Taborda',
      image: 'JaimePerez.jpg',
      descripcion: this.translate.instant('profe3'),
      institucion: 'Universidad Nacional de Colombia',
      contacto: 'http://jaimeandres.co/',
    },
    {
      name: 'Alba Graciela Avila Bernal',
      image: 'albaprofe.jpg',
      descripcion: this.translate.instant('profe4'),
      institucion: 'Universidad de los Andes',
      contacto: 'a-avila [at] uniandes.edu.co',
    },
    {
      name: 'Luis Norberto Benítez Vásquez',
      image: 'usuario.jpg',
      descripcion: this.translate.instant('profe5'),
      institucion: 'Servicio Nacional de Aprendizaje SENA',
      contacto: 'jaime ',
    },
    {
      name: 'Humberto Loaiza Correa:',
      image: 'HumbertoLoaiza.png',
      descripcion: this.translate.instant('profe6'),
      institucion: 'Universidad del Valle',
      contacto: 'humberto.loaiza@correounivalle.edu.co',
    },
    {
      name: 'Andrés David Restrepo Girón:',
      image: 'AndresRestrepo.png',
      descripcion: this.translate.instant('profe7'),
      institucion: 'Universidad del Valle',
      contacto: 'andres.david.restrepo@correounivalle.edu.co',
    }
  ];

  // tslint:disable-next-line: member-ordering
  internacional: any[] = [
    {
      name: 'Aura Conci',
      image: 'aura.jpg',
      descripcion: this.translate.instant('profe8'),
      institucion: 'Campus da Praia Vermelha',
      contacto: 'aconci@ic.uff.br',
    },
    {
      name: 'Ruben Dorantes Rodríguez',
      image: 'ruben.jpg',
      descripcion: this.translate.instant('profe9'),
      institucion: 'Universidad Tecnologica de Pereira',
      contacto: 'Universidad Autónoma Metropolitana ',
    },
    {
      name: 'Joaquim Gabriel Magalhães Mendes',
      image: 'joaquim.jpg',
      descripcion: this.translate.instant('profe10'),
      institucion: 'Universidade do Porto',
      contacto: 'jgabriel@fe.up.pt',
    },
  ];

  Tematicas: any[] = [
    {
      name: 'Materiales',
      image: 'termografia.jpg',
    },
    {
      name: 'Termografia medica',
      image: 'termografia.jpg',
    },
    {
      name: 'Termografia de materiales',
      image: 'termografia.jpg',
    },
    {
      name: 'Milton Humberto',
      image: 'termografia.jpg',
    },
  ];

  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    this.translate.use('es');
  }

 
}
