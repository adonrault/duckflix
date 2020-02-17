import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  providerFb: firebase.auth.FacebookAuthProvider;

  constructor(
    private platform: Platform,
    public afAuth: AngularFireAuth,
    private fb: Facebook,
    public router: Router
  ){
    this.providerFb = new firebase.auth.FacebookAuthProvider();
    this.afAuth.authState.subscribe(userResponse => {
      if (userResponse) {
        localStorage.setItem('user', JSON.stringify(userResponse));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  // Inscription
  async registerUser(value){
    return await new Promise<any>((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
  }

  // Connexion
  async loginUser(value){
    return await new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
  }

  // Envoyer mail de vérification à l'inscription
  //async sendEmailVerification() {
    //return await this.afAuth.auth.currentUser.sendEmailVerification();
  //}

  // Envoyer mail réinitialisation mot de passe
  async sendPasswordResetEmail(value) {
    return await this.afAuth.auth.sendPasswordResetEmail(value.email);
  }

  isUserLoggedIn() {
    return JSON.parse(localStorage.getItem('user'));
  }

  // Facebook login / inscription
  loginWithFacebook() {
    if (this.platform.is('cordova')) {
      console.log('Plateforme cordova');
      this.facebookCordova();
    } else {
      console.log('Plateforme Web');
      this.facebookWeb();
    }
  }

  async facebookCordova() {
    return await this.fb.login(['public_profile', 'email']).then( (response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);
      firebase.auth().signInWithCredential(facebookCredential)
      .then((success) => {
        this.router.navigate(["/tabs"]);
        console.log('Info Facebook ' + JSON.stringify(success));
      }).catch((error) => {
        console.log('Erreur: ' + JSON.stringify(error));
      });
    }).catch((error) => { console.log(error); });
  }

  async facebookWeb() {
    return await this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((success) => {
        this.router.navigate(["/tabs"]);
        console.log('Info Facebook: ' + JSON.stringify(success));
      }).catch((error) => {
        console.log('Erreur: ' + JSON.stringify(error));
      });
  }
 
  async logoutUser(){
    return await new Promise((resolve, reject) => {
      if(this.afAuth.auth.currentUser){
        this.afAuth.auth.signOut()
        .then(() => {
          this.router.navigate(["/"]);
          console.log("LOG Out");
          resolve();
        }).catch((error) => {
          reject();
        });
      } else {
        if (this.platform.is('cordova')) {
          this.fb.logout()
          .then(() => {
            this.router.navigate(["/tabs"]);
            console.log("LOG Out");
            resolve();
          }).catch((error) => {
            reject();
          });
        }
      }
    })
  }
 
  userDetails(){
    return firebase.auth().currentUser;
  }
}