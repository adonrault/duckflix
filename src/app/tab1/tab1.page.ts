import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { DataService } from "../service/data.service";
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  images = [];
  action = [];
  tendances = [];

  constructor(
    public afDB: AngularFireDatabase,
    public afSG: AngularFireStorage,
    public navCtrl: NavController,
    public platform: Platform,
    private dataService: DataService
  ) {
    this.getImagesDatabase();
  }

  getImagesDatabase() {
    // Id de 0 à 9
    this.afDB.list('Images/', ref => ref.orderByChild("id").startAt(0).endAt(9)).snapshotChanges(['child_added'])
    .subscribe(action => {
      action.forEach(image => {
        this.getImagesStorage(image);
      })
    });
    // Id de 10 à 19
      this.afDB.list('Images/', ref => ref.orderByChild("id").startAt(10).endAt(19)).snapshotChanges(['child_added'])
      .subscribe(tendances => {
        tendances.forEach(image => {
          this.getImagesStorage(image);
        })
      });
  }
  
  
  getImagesStorage(image: any) {
    const imgRef = image.payload.exportVal().ref
    this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
      //console.log(imgUrl);
      this.images.push({
        id: image.payload.exportVal().id,
        name: image.payload.exportVal().name,
        url: imgUrl
      });
    });
  }

  // You
  Movie0() {
    this.dataService.openMovie0();
  }
  // Altered Carbon
  Movie1() {
    this.dataService.openMovie1();
  }
  // 13 Reasons Why
  Movie2() {
    this.dataService.openMovie2();
  }
  // The Witcher
  Movie3() {
    this.dataService.openMovie3();
  }
  // The Punisher
  Movie4() {
    this.dataService.openMovie4();
  }
  // Stanger Things
  Movie5() {
    this.dataService.openMovie5();
  }
  // Narcos
  Movie6() {
    this.dataService.openMovie6();
  }
  // Messiah
  Movie7() {
    this.dataService.openMovie7();
  }
  // Lucifer
  Movie8() {
    this.dataService.openMovie8();
  }
  // Locke and Key
  Movie9() {
    this.dataService.openMovie9();
  }
  // Insatiable
  Movie10() {
    this.dataService.openMovie10();
  }
  // Elite
  Movie11() {
    this.dataService.openMovie11();
  }
  // Dynastie
  Movie12() {
    this.dataService.openMovie12();
  }
  // Dracula
  Movie13() {
    this.dataService.openMovie13();
  }
  // Daybreak
  Movie14() {
    this.dataService.openMovie14();
  }
  // Dark
  Movie15() {
    this.dataService.openMovie15();
  }
  // Breaking bad
  Movie16() {
    this.dataService.openMovie16();
  }
  // Black Lightning
  Movie17() {
    this.dataService.openMovie17();
  }
  // Better Call Saul
  Movie18() {
    this.dataService.openMovie18();
  }
  // Arrow
  Movie19() {
    this.dataService.openMovie19();
  }
}
