import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieDynastiePage } from './movie-dynastie.page';

describe('MovieDynastiePage', () => {
  let component: MovieDynastiePage;
  let fixture: ComponentFixture<MovieDynastiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDynastiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDynastiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
