import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieYouPage } from './movie-you.page';

describe('MovieYouPage', () => {
  let component: MovieYouPage;
  let fixture: ComponentFixture<MovieYouPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieYouPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieYouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
