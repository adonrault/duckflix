import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieBreakingbadPage } from './movie-breakingbad.page';

describe('MovieBreakingbadPage', () => {
  let component: MovieBreakingbadPage;
  let fixture: ComponentFixture<MovieBreakingbadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieBreakingbadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieBreakingbadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
