import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieStrangerthingsPage } from './movie-strangerthings.page';

describe('MovieStrangerthingsPage', () => {
  let component: MovieStrangerthingsPage;
  let fixture: ComponentFixture<MovieStrangerthingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieStrangerthingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieStrangerthingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
