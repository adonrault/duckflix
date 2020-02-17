import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieThepunisherPage } from './movie-thepunisher.page';

describe('MovieThepunisherPage', () => {
  let component: MovieThepunisherPage;
  let fixture: ComponentFixture<MovieThepunisherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieThepunisherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieThepunisherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
