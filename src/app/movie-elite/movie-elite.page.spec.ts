import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieElitePage } from './movie-elite.page';

describe('MovieElitePage', () => {
  let component: MovieElitePage;
  let fixture: ComponentFixture<MovieElitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieElitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieElitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
