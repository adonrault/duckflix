import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieArrowPage } from './movie-arrow.page';

describe('MovieArrowPage', () => {
  let component: MovieArrowPage;
  let fixture: ComponentFixture<MovieArrowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieArrowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieArrowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
