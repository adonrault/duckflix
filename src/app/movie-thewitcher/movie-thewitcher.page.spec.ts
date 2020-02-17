import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieThewitcherPage } from './movie-thewitcher.page';

describe('MovieThewitcherPage', () => {
  let component: MovieThewitcherPage;
  let fixture: ComponentFixture<MovieThewitcherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieThewitcherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieThewitcherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
