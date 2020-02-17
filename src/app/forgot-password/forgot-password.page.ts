import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { NavController } from '@ionic/angular';
 
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})

export class ForgotPasswordPage implements OnInit {
 
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  responseMessage: string = '';
  responseMessageType: string = '';
  isForgotPassword: boolean;
 
  validation_messages = {
   'email': [
     { type: 'required', message: 'Merci de renseigner une adresse e-mail.' },
     { type: 'pattern', message: 'Veuillez entrer une adresse e-mail valide.' }
   ]
 };
 
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {
    this.isForgotPassword = false;
  }

  ngOnInit(){
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });
  }
 
  forgotPassword(value) {
    this.authService.sendPasswordResetEmail(value)
      .then(res => {
        console.log(res);
        this.isForgotPassword = false;
        window.localStorage.setItem('resetpassword', value);
        this.navCtrl.navigateForward('/reset-password');
      }, err => {
      });
  }
}