import { Component, OnInit } from '@angular/core';
import { DataService } from "../service/data.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  public searchTerm: string = "";
  public images: any;

  constructor(
    private dataService: DataService
  ) {}



  ngOnInit() {
    this.setFilteredImages();
  }

  setFilteredImages() {
    this.images = this.dataService.filterImages (this.searchTerm);
  }

  // You
  searchMovie0() {
    this.dataService.openMovie0();
  }
  // Altered Carbon
  searchMovie1() {
    this.dataService.openMovie1();
  }
  // 13 Reasons Why
  searchMovie2() {
    this.dataService.openMovie2();
  }
  // The Witcher
  searchMovie3() {
    this.dataService.openMovie3();
  }
  // The Punisher
  searchMovie4() {
    this.dataService.openMovie4();
  }
  // Stanger Things
  searchMovie5() {
    this.dataService.openMovie5();
  }
  // Narcos
  searchMovie6() {
    this.dataService.openMovie6();
  }
  // Messiah
  searchMovie7() {
    this.dataService.openMovie7();
  }
  // Lucifer
  searchMovie8() {
    this.dataService.openMovie8();
  }
  // Locke and Key
  searchMovie9() {
    this.dataService.openMovie9();
  }
  // Insatiable
  searchMovie10() {
    this.dataService.openMovie10();
  }
  // Elite
  searchMovie11() {
    this.dataService.openMovie11();
  }
  // Dynastie
  searchMovie12() {
    this.dataService.openMovie12();
  }
  // Dracula
  searchMovie13() {
    this.dataService.openMovie13();
  }
  // Daybreak
  searchMovie14() {
    this.dataService.openMovie14();
  }
  // Dark
  searchMovie15() {
    this.dataService.openMovie15();
  }
  // Breaking bad
  searchMovie16() {
    this.dataService.openMovie16();
  }
  // Black Lightning
  searchMovie17() {
    this.dataService.openMovie17();
  }
  // Better Call Saul
  searchMovie18() {
    this.dataService.openMovie18();
  }
  // Arrow
  searchMovie19() {
    this.dataService.openMovie19();
  }
}
