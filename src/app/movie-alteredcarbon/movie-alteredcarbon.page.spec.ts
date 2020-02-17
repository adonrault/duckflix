import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieAlteredcarbonPage } from './movie-alteredcarbon.page';

describe('MovieAlteredcarbonPage', () => {
  let component: MovieAlteredcarbonPage;
  let fixture: ComponentFixture<MovieAlteredcarbonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieAlteredcarbonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieAlteredcarbonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
