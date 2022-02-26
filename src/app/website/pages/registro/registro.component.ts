import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { inscripcion, DataRegister } from 'src/app/core/models/index-models';

import { TranslateService } from '@ngx-translate/core';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  datosRegistro = {} as DataRegister;

  constructor(
    public firebaseService: FirebaseService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('es');
  }

  inscripcion: inscripcion[] = [
    {
      value: this.translate.instant('estudiante'),
      viewValue: this.translate.instant('estudiante'),
    },
    {
      value: this.translate.instant('profesional'),
      viewValue: this.translate.instant('profesional'),
    },
  ];

  participar: inscripcion[] = [
    {
      value: this.translate.instant('ponente'),
      viewValue: this.translate.instant('ponente'),
    },
    {
      value: this.translate.instant('asistente'),
      viewValue: this.translate.instant('asistente'),
    },
    {
      value: this.translate.instant('evaluador'),
      viewValue: this.translate.instant('evaluador'),
    }
  ];

  //Formulario reactivo que permite almacenar la informacion:
  formRegister = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    asistencia: new FormControl(''),
    participacion: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    cedula: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    password1: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  //Se llaman los elementos del formulario reactivo
  get nameField() {
    return this.formRegister.get('name');
  }

  get lastNameField() {
    return this.formRegister.get('lastName');
  }
  get emailField() {
    return this.formRegister.get('email');
  }

  get phoneField() {
    return this.formRegister.get('phone');
  }
  get cityField() {
    return this.formRegister.get('city');
  }

  get cedulaField() {
    return this.formRegister.get('cedula');
  }
  get passwordField() {
    return this.formRegister.get('password');
  }
  get password1Field() {
    return this.formRegister.get('password1');
  }
  get asistenciaField() {
    return this.formRegister.get('asistencia');
  }
  get participacionField() {
    return this.formRegister.get('participacion');
  }

  //Metodo que envia los datos del formulario:
  save($event: any) {
    this.datosRegistro = Object.assign(
      this.datosRegistro,
      this.formRegister.value
    );
    this.addRegistro(this.datosRegistro);
  }

  addRegistro(datosRegistro: DataRegister) {
    this.firebaseService.addRegister(datosRegistro);
    if (confirm('Are you sure you want to save if ?')) {
      this.firebaseService.addRegister(datosRegistro);
      this.datosRegistro = {} as DataRegister;
      this.register();
    }
  }

  register() {
    const { email, password } = this.formRegister.value;
    this.firebaseService.register(email, password).then(
      (res) => {
        window.alert('REGISTRO EXITOSO: ' + email);
      },
      (error) => {
        window.alert('error: ' + error.message);
      }
    );
  }
}
