import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieReasonswhyPage } from './movie-reasonswhy.page';

describe('MovieReasonswhyPage', () => {
  let component: MovieReasonswhyPage;
  let fixture: ComponentFixture<MovieReasonswhyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieReasonswhyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieReasonswhyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
