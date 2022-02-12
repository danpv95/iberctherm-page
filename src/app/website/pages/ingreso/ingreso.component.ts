import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  constructor() {
        //Se implementa para darle estilos a la vista y la imagen de fondo
        let $page = document.getElementsByClassName("full-page")[0];
        let image_src;
        var image_container = document.createElement("div");
        image_container.classList.add("full-page-background");
        $page.classList.add("register-page");
        image_container.style.backgroundImage = "url(assets/img/fondo2.jpg)";
        $page.appendChild(image_container);
  }

  ngOnInit(): void {}
}
