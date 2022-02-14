import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  // Formulario reactivo que permite almacenar la informacion:
  formIngreso = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(public firebaseService: FirebaseService) {
    // Se implementa para darle estilos a la vista y la imagen de fondo
  }

  ngOnInit(): void {}

  // Se llaman los elementos del formulario reactivo
  get nameField() {
    return this.formIngreso.get('name');
  }

  get passwordField() {
    return this.formIngreso.get('password');
  }

  // Metodo que envia los datos del formulario de ingreso:
  save($event: any) {
    console.log('envia formulario de ingreso');
    console.log(this.formIngreso.value);
  }

  login() {
    const { name, password } = this.formIngreso.value;
    this.firebaseService.login(name, password).then((res) => {
      console.log('Ingreso: ' + name);
    });
  }

  register() {
    const { name, password } = this.formIngreso.value;
    this.firebaseService.register(name, password).then((res) => {
      console.log('Se registro: ' + name);
    });
  }

  userLogged() {
    this.firebaseService.getUserLog().subscribe((res) => {
      console.log('email: ' + res?.email);
    });
  }

  logout() {
    this.firebaseService.logout();
  }
}
