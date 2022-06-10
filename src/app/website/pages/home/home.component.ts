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

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
