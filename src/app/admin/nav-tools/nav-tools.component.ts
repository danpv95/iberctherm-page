import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';

@Component({
  selector: 'app-nav-tools',
  templateUrl: './nav-tools.component.html',
  styleUrls: ['./nav-tools.component.css']
})
export class NavToolsComponent implements OnInit {
  register = [];
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.getRegisters();
  }

  getRegisters (){
    this.firebaseService.getRegister().subscribe((register) => {
      console.log(register);
      this.register = register;
    });
  }

  deleteProduct(event, register) {
    console.log(register);
    if (confirm('Are you sure you want to delete if ?')) {
      this.firebaseService.deleteRegister(register);
      this.getRegisters();
    }
  }

}
