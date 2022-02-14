import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../../models/product.models';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  productsCollections: AngularFirestoreCollection; // coleccion de productos
  productDoc: AngularFirestoreDocument<Product>; // un solo elemento
  products: Observable<Product[]>; // lista de elementos

  constructor(public db: AngularFirestore, public fireAuth: AngularFireAuth) {
    // this.products = this.db.collection('products').valueChanges();

    this.productsCollections = this.db.collection('products');
    this.products = this.productsCollections.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as Product;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    this.productsCollections.doc(product.id).set(product);
  }

  deleteProduct(product: Product) {
    this.productDoc = this.db.doc(`products/${product.id}`);
    this.productDoc.delete();
  }

  updateProduct(product: Product) {
    this.productDoc = this.db.doc(`products/${product.id}`);
    this.productDoc.update(product);
  }

  // Authentication
  async register(email: string, password: string) {
    try {
      return await this.fireAuth.createUserWithEmailAndPassword(
        email,
        password
      );
    } catch (err) {
      console.log('error log: ', err);
      return null;
    }
  }

  async login(email: string, password: string) {
    try {
      return await this.fireAuth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log('error log: ', err);
      return null;
    }
  }

  getUserLog() {
    return this.fireAuth.authState;
  }

  logout() {
    this.fireAuth.signOut();
  }
}
