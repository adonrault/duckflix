import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../service/authentication.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';

  selectedVal: string;
  responseMessage: string = '';
  responseMessageType: string = '';
  emailInput: string;
  passwordInput: string;
  isForgotPassword: boolean;
  userDetails: any;

 
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
 
  ) {
      this.selectedVal = 'login';
      this.isForgotPassword = false;
    }
 
  ngOnInit() {
 
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
 
    // Comman Method to Show Message and Hide after 2 seconds
    showMessage(type, msg) {
      this.responseMessageType = type;
      this.responseMessage = msg;
      setTimeout(() => {
        this.responseMessage = "";
      }, 2000);
    }
   
    // Called on switching Login/ Register tabs
    public onValChange(val: string) {
      this.showMessage("", "");
      this.selectedVal = val;
    }

  loginUser(value){
    this.authService.loginUser(value)
    .then(res => {
      this.errorMessage= "";
      this.navCtrl.navigateForward('/tabs');
      this.isUserLoggedIn();
    }, err => {
      switch (err.code) {
        case "auth/wrong-password": {
          this.errorMessage = 'Mot de passe incorrect.';
          break;
        }
        case "auth/user-not-found": {
          this.errorMessage = 'Désolé, nous n\'avons pas trouvé de compte avec cette adresse e-mail.';
          break;
        }
        case "auth/invalid-email": {
          this.errorMessage = 'Merci de saisir une adresse mail valide.';
          break;
        }
      }
    })
  }

  // Check localStorage is having User Data
  isUserLoggedIn() {
    this.userDetails = this.authService.isUserLoggedIn();
  }

  // Open Popup to Login with Facebook Account
  facebookLogin() {
    this.authService.loginWithFacebook();
      this.showMessage("success", "Successfully Logged In with Facebook");
      this.isUserLoggedIn();
    }

    // Send link on given email to reset password
    forgotPassword() {
      this.authService.sendPasswordResetEmail(this.emailInput)
        .then(res => {
          console.log(res);
          this.isForgotPassword = false;
          this.showMessage("success", "Please Check Your Email");
        }, err => {
          this.showMessage("danger", err.message);
        });
    }

  goToRegisterPage(){
    this.navCtrl.navigateForward('/registration');
  }
}