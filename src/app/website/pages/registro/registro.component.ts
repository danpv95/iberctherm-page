import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { inscripcion } from 'src/app/core/models/modelos.component';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  constructor(private notification: NotificationService,
    private translate: TranslateService) {
      this.translate.setDefaultLang('es');
    }


   

  inscripcion: inscripcion[] = [
    { value:this.translate.instant('estudiante'), viewValue: this.translate.instant('estudiante') },
    { value: this.translate.instant('profesional'), viewValue: this.translate.instant('profesional') },
  ];

  participar: inscripcion[] = [
    { value: this.translate.instant('ponente'), viewValue:  this.translate.instant('ponente') },
    { value:  this.translate.instant('asistente'), viewValue: this.translate.instant('asistente')},
  ];


     //Formulario reactivo que permite almacenar la informacion: 
  formRegister = new FormGroup({
    name: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    asistencia:new FormControl(""),
    participacion:new FormControl(""),
    email: new FormControl("", [Validators.required,Validators.email ]),
    phone: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    cedula: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    password1: new FormControl("", [Validators.required]),
  });


  ngOnInit(): void {
  }

    //Se llaman los elementos del formulario reactivo
    get nameField() {
      return this.formRegister.get("name");
    }
  
    get lastNameField() {
      return this.formRegister.get("lastName");
    }
    get emailField() {
      return this.formRegister.get("email");
    }
  
    get phoneField() {
      return this.formRegister.get("phone");
    }
    get cityField() {
      return this.formRegister.get("city");
    }
  
    get cedulaField() {
      return this.formRegister.get("cedula");
    }
    get passwordField() {
      return this.formRegister.get("password");
    }
    get password1Field() {
      return this.formRegister.get("password1");
    }
    get asistenciaField() {
      return this.formRegister.get("asistencia");
    }
    get participacionField() {
      return this.formRegister.get("participacion");
    }
  
  
    //Metodo que envia los datos del formulario:
    save($event: any) {
      console.log("enviaaa formulario");
      console.log(this.formRegister.value);
    }



}
