import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  dataUser = {
    email: ''
  };
  mail: string;
  connected: boolean;
  method: any;

  constructor(
    public afAuth: AngularFireAuth,
    private authService: AuthenticationService
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
        this.connected = false;
      } else {
        console.log('connecté: ' + auth.uid);
        console.log(auth.email);
        this.connected = true;
        this.mail = auth.email;
        this.method = auth.providerData[0].providerId;
      }
    });
  }

  ngOnInit() {
  }

}
