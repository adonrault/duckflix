import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { NavController } from '@ionic/angular';
 
@Component({
  selector: 'app-register',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
 
 
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
 
  validation_messages = {
   'email': [
     { type: 'required', message: 'Merci de renseigner une adresse e-mail.' },
     { type: 'pattern', message: 'Veuillez entrer une adresse e-mail valide.' }
   ],
   'password': [
     { type: 'required', message: 'Un mot de passe est requis.' },
     { type: 'minlength', message: 'Votre mot de passe doit comporter entre 6 et 60 caractères.' },
     { type: 'maxlength', message: 'Veuillez raccourcir votre mot de passe à 60 caractères ou moins.' }
   ]
 };
 
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {}
 
  ngOnInit(){
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(60),
        Validators.required
      ])),
    });
  }
 
  tryRegister(value){
    this.authService.registerUser(value)
    .then(res => {
      this.errorMessage= "";
      this.navCtrl.navigateForward('/tabs');
    }, err => {
      switch (err.code) {
        case "auth/invalid-email": {
          this.errorMessage = 'Merci de saisir une adresse mail valide.';
          break;
        }
        case "auth/email-already-in-use": {
          this.errorMessage = 'Ce compte existe déjà, merci de vous connecter.'
          break;
        }
      }
    })
  }
 
  goLoginPage(){
    this.navCtrl.navigateForward('/login');
  }
}