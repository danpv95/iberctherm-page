import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faBars, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  langs: string[] = [];

  faBars = faBars;
  faSignInAlt = faSignInAlt;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.addLangs(['es', 'en', 'por']);

    this.langs = this.translate.getLangs();

    translate.get(this.langs).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {}

  camnbiarLang(lang: string) {
    this.translate.use(lang);
  }
}
