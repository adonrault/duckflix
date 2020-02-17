import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieDarkPage } from './movie-dark.page';

describe('MovieDarkPage', () => {
  let component: MovieDarkPage;
  let fixture: ComponentFixture<MovieDarkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDarkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
