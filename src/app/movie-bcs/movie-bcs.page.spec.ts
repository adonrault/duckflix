import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieBcsPage } from './movie-bcs.page';

describe('MovieBcsPage', () => {
  let component: MovieBcsPage;
  let fixture: ComponentFixture<MovieBcsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieBcsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieBcsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
