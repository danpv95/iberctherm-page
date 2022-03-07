import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { geteuid } from 'process';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product, DataRegister } from '../../models/index-models';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  // Registros
  registerCollections: AngularFirestoreCollection; // coleccion de productos
  registerDoc: AngularFirestoreDocument<DataRegister>; // un solo elemento
  registers: Observable<DataRegister[]>; // lista de elementos

  constructor(public db: AngularFirestore, public fireAuth: AngularFireAuth) {
    // this.products = this.db.collection('products').valueChanges();
     // Register
    this.registerCollections = this.db.collection('register');
    this.registers = this.registerCollections.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as DataRegister;
          data.cedula = Number(a.payload.doc.id);
          return data;
        });
      })
    );
  }

  // GET METHODS
  getRegister() {
    return this.registers;
  }

  getRegisterbyMail(mail: string) {
    return this.db
      .collection('register', (ref) => ref.where('email', '==', mail))
      .valueChanges();
  }
  getRegisterById(id: string) {
    console.log('registerID: ' + id);
    return this.registerCollections.doc(id).valueChanges();
  }

  // POST METHODS
  addRegister(datosRegistro: DataRegister) {
    this.registerCollections
      .doc(String(datosRegistro.cedula))
      .set(datosRegistro);
  }

  // DELETE METHODS
  deleteRegister(data: DataRegister) {
    this.registerDoc = this.db.doc(`register/${data.cedula}`);
    this.registerDoc.delete();
  }

  //UPDATE METHODS
  /*updateProduct(product: Product) {
    this.productDoc = this.db.doc(`products/${product.id}`);
    this.productDoc.update(product);
  }*/

  // Verificacion
  async sendVerificationEmail(): Promise <void> {
    return (await this.fireAuth.currentUser).sendEmailVerification();
  }

  // Authentication
  async register(email: string, password: string) {
    try {
      const register = await this.fireAuth.createUserWithEmailAndPassword(email, password);
      this.sendVerificationEmail();
      return register;
    } catch (error) {
      console.log(error);
    }
  }

  async login(email: string, password: string) {
    try {
      const result = await this.fireAuth.signInWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  getUserLog() {
    return this.fireAuth.authState;
  }

  logout() {
    this.fireAuth.signOut();
  }
}
