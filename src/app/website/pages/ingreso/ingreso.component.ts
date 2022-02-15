import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';
import { DataRegister } from 'src/app/core/models/registro.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  // Formulario reactivo que permite almacenar la informacion:

  errorMessage = '';
  dataRegister: DataRegister = {};

  formIngreso = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private route: Router, public firebaseService: FirebaseService) {
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
  save(_$event: any) {
    console.log(this.formIngreso.value);
  }

  login() {
    const { name, password } = this.formIngreso.value;
    this.firebaseService.login(name, password).then(
      (response) => {
        if (response !== null && name === 'danpv95@gmail.com') {
          console.log('Ingreso: ' + name);
          this.route.navigate(['/admin/nav-tools']);
        } else if(response !== null){
          console.log('Ingreso: ' + name);
          this.getRegisterbyId();
        }
      },
      (error) => {
        window.alert('error: ' + error.message);
      }
    );
  }

  getRegisterbyId() {
    const { name, password } = this.formIngreso.value;
    this.firebaseService.getRegisterbyMail(name).subscribe((response: DataRegister[]) => {
      this.dataRegister = response[0];
      console.log(this.dataRegister);
      this.route.navigate(['/admin/status', { id: this.dataRegister.cedula }]);
    });
  }
}
