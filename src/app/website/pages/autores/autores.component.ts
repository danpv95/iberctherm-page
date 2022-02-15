import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.models';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css'],
})
export class AutoresComponent implements OnInit {
  products = [];
  productSend = {} as Product;
  editingProduct: Product;
  editing: boolean = false;

  constructor(public firebaseService: FirebaseService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.firebaseService.getProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }

  deleteProduct(event, product) {
    console.log(product);
    if (confirm('Are you sure you want to delete if ?')) {
      this.firebaseService.deleteProduct(product);
      this.getProducts();
    }
  }

  addProduct() {
    console.log(this.productSend);
    if (
      this.productSend.name !== '' &&
      this.productSend.description !== '' &&
      this.productSend.price !== 0
    ) {
      this.firebaseService.addProduct(this.productSend);
      this.productSend = {} as Product;
    }
  }

  aditProduct(event, product) {
    console.log(product);
    this.editingProduct = product;
    this.editing = !this.editing;
  }

  updateProduct() {
    this.firebaseService.updateProduct(this.editingProduct);
    this.editingProduct = {} as Product;
    this.editing = !this.editing;
  }

  /*login() {
    const { name, password } = this.formIngreso.value;
    this.firebaseService.login(name, password).then((res) => {
      console.log('Ingreso: ' + name);
      this.route.navigate(['/admin']);
    });
  }

  register() {
    const { name, password } = this.formIngreso.value;
    this.firebaseService.register(name, password).then((res) => {
      console.log('Se registro: ' + name);
    });
  }*/

  userLogged() {
    this.firebaseService.getUserLog().subscribe((res) => {
      console.log('email: ' + res?.email);
    });
  }

  logout() {
    this.firebaseService.logout();
  }
}
