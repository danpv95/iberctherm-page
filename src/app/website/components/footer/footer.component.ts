import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(
    private translate: TranslateService


  ) {
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    // this.traducir.localeEvent.subscribe((locale) => this.translate.use(locale));
  }
}
