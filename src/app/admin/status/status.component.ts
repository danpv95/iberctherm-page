import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPhoneAlt, faIdCard, faLightbulb, faAt, faCity } from '@fortawesome/free-solid-svg-icons';

import { DataRegister } from 'src/app/core/models/registro.model';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent implements OnInit {
  // Icons
  iconPhone = faPhoneAlt;
  iconId = faIdCard;
  iconLight = faLightbulb;
  iconAt = faAt;
  iconCity = faCity;

  id: string;
  status = {} as DataRegister;

  constructor(
    private routeActive: ActivatedRoute,
    public route: Router,
    public firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.chargeDaraRegister();
  }

  chargeDaraRegister() {
    this.id = this.routeActive.snapshot.paramMap.get('id');
    this.firebaseService
      .getRegisterById(this.id)
      .subscribe((data: DataRegister) => {
        this.status = data;
      });
  }

  logout() {
    this.firebaseService.logout();
    this.route.navigate(['/home']);
  }
}
