import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { CommonModule } from '@angular/common';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage {

  constructor(
    public modalController : ModalController,
    public afDB: AngularFireDatabase,
    public afSG: AngularFireStorage,
    public navParams: NavParams,
    public CommonModule : CommonModule,
    private dataservice : DataService
  ) {}

  close() {
    this.modalController.dismiss();
  }

}
