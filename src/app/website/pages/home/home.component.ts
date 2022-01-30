import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  organizadores: any[] = [
    {
      name: 'Milton Medina',
      image: 'profeMilton.jpg',
      descripcion:
        ' Ph.D. En Física, Investigador Junior de Minciencias, docente de la Universidad Tecnológica de Pereira, director del grupo de Investigación en Electrofisiología reconocido en categoría b, co-director del Grupo de Investigación en propiedades Magnéticas y Magneto-ópticas de nuevos materiales (GIMM) reconocido en categoría b.',
      institucion: 'Universidad Tecnologica de Pereira',
      contacto: 'mmedina@utp.edu.co',
    },
    {
      name: 'Jenniffer Bustamante',
      image: 'profe_jennifer.png',
      descripcion:
        'Estudiante de Doctorado en Ciencias, Magister en Ingeniería Eléctrica, docente de la Universidad Tecnológica de Pereira, integrante del grupo de Investigación en Electrofisiología reconocido en categoría b.',
      institucion: 'Universidad Tecnologica de Pereira',
      contacto: 'jbustamante@utp.edu.co ',
    },
    {
      name: 'Manuel Pinzón Candelario',
      image: 'profeManuel.jpg',
      descripcion:
        ' Magíster en Economía, Magíster en Ingeniería, Especializado en Gerencia Ambiental, Especialista en Gerencia y Gestión Cultural, Ingeniero en metalurgia, docente del Servicio Nacional de Aprendizaje SENA.',
      institucion: 'Servicio Nacional de Aprendizaje SENA',
      contacto: 'candelario@utp.edu.co ',
    },
    {
      name: 'Jaime Andrés Pérez Taborda',
      image: 'JaimePerez.jpg',
      descripcion:
        ' El Dr. Jaime Andrés Pérez Taborda recibió el título de Ingeniero Físico (Hons.) de la Universidad Tecnológica de Pereira, Colombia, y el título de máster en radiación de sincrotrón y aceleradores de partículas de la Universidad Autónoma de Barcelona, así como su doctorado (Cum laude) del Instituto de Microelectrónica de Madrid, Universidad Complutense de Madrid...',
      institucion: 'Universidad Nacional de Colombia',
      contacto: 'http://jaimeandres.co/',
    },
    {
      name: 'Alba Graciela Avila Bernal',
      image: 'albaprofe.jpg',
      descripcion:
        '  Doctora en filosofía de la Universidad de Cambridge, profesora asociada al departamento de Ingeniería Eléctrica y Electrónica de la Universidad de los Andes, Magíster en Ingeniería Eléctrica, profesional en Física y en Ingeniería Eléctrica.',
      institucion: 'Universidad de los Andes',
      contacto: 'a-avila [at] uniandes.edu.co',
    },
    {
      name: 'Luis Norberto Benítez Vásquez',
      image: 'usuario.jpg',
      descripcion:
        ' Doctor en ciencias de la Escuela Politécnica Federal de Lausanne, Magíster en Química y profesional en Química de la Universidad del Valle, Investigador asociado de Minciencias.',
      institucion: 'Servicio Nacional de Aprendizaje SENA',
      contacto: 'jaime ',
    },
    {
      name: 'Humberto Loaiza Correa:',
      image: 'HumbertoLoaiza.png',
      descripcion:
        ' Doctor en Robótica y Visión Artificial, Université d´Evry, Francia, Magíster en Automática e Ingeniero Electricista de la Universidad del Valle, integrante del grupo de investigación en Percepción y Sistemas Inteligentes, PSI e Investigador Senior de Minciencias.',
      institucion: 'Universidad del Valle',
      contacto: 'humberto.loaiza@correounivalle.edu.co',
    },
    {
      name: 'Andrés David Restrepo Girón:',
      image: 'AndresRestrepo.png',
      descripcion:
        ' Doctor en Ingeniería, Magíster en Automática, e Ingeniero Electrónico de la Universidad del Valle, Integrante del grupo de investigación en Percepción y Sistemas Inteligentes, PSI e Investigador Senior de Minciencias.',
      institucion: 'Universidad del Valle',
      contacto: 'andres.david.restrepo@correounivalle.edu.co',
    },
    {
      name: '',
      image: '',
      descripcion: '',
      institucion: '',
      contacto: '',
    },
  ];

  Internacional: any[] = [
    {
      name: 'Aura Conci',
      image: 'aura.jpg',
      descripcion:
        ' Doctora, Magíster y profesional de Ingeniería Civil de la Universidad Católica de Río de Janeiro, docente de ciencias de la computación en la Universidade Federal Fluminense-UFF.',
      institucion: 'Campus da Praia Vermelha',
      contacto: 'aconci@ic.uff.br',
    },
    {
      name: 'Ruben Dorantes Rodríguez',
      image: 'ruben.jpg',
      descripcion:
        'Doctor en Energética y Transferencia de Calor en el Instituto Nacional de Ciencias Aplicadas de Lyon, Especializado en Estudios a Profundidad en Energética en la Universidad de Niza, Licenciado en Física de la Universidad Nacional Autónoma de México.',
      institucion: 'Universidad Tecnologica de Pereira',
      contacto: 'Universidad Autónoma Metropolitana ',
    },
    {
      name: 'Joaquim Gabriel Magalhães Mendes',
      image: 'joaquim.jpg',
      descripcion:
        ' Doctor en Electrónica Industrial por la Universidad de Minho, Magíster en Automatización Industrial y Gestión de Procesos, Ingeniero Mecánico de la Universidad de Oporto, integrante del grupo de Automatización, Instrumentación y Control.',
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
}
