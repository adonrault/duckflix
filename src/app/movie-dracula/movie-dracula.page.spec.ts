import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieDraculaPage } from './movie-dracula.page';

describe('MovieDraculaPage', () => {
  let component: MovieDraculaPage;
  let fixture: ComponentFixture<MovieDraculaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDraculaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDraculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
