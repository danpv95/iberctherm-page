import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    console.log("cual es el idioma");
    console.log(this.translate.getDefaultLang());
  

    
  }
}
