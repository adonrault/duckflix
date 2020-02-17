import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieDaybreakPage } from './movie-daybreak.page';

describe('MovieDaybreakPage', () => {
  let component: MovieDaybreakPage;
  let fixture: ComponentFixture<MovieDaybreakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDaybreakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDaybreakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
