import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieInsatiablePage } from './movie-insatiable.page';

describe('MovieInsatiablePage', () => {
  let component: MovieInsatiablePage;
  let fixture: ComponentFixture<MovieInsatiablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieInsatiablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieInsatiablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
