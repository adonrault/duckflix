import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieBlacklightningPage } from './movie-blacklightning.page';

describe('MovieBlacklightningPage', () => {
  let component: MovieBlacklightningPage;
  let fixture: ComponentFixture<MovieBlacklightningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieBlacklightningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieBlacklightningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
