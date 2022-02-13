import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'] 
})

export class IngresoComponent implements OnInit {
  constructor() {
    //Se implementa para darle estilos a la vista y la imagen de fondo
  
  }

       //Formulario reactivo que permite almacenar la informacion: 
       formIngreso = new FormGroup({
        name: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required]),
      });

          //Se llaman los elementos del formulario reactivo
    get nameField() {
      return this.formIngreso.get("name");
    }
  
    get passwordField() {
      return this.formIngreso.get("password");
    }
  ngOnInit(): void {}


   
    //Metodo que envia los datos del formulario de ingreso:
    save($event: any) {
      console.log("enviaaa formulario de ingreso");
      console.log(this.formIngreso.value);
    }

}
