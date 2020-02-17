import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntrovideoPage } from './introvideo.page';

describe('IntrovideoPage', () => {
  let component: IntrovideoPage;
  let fixture: ComponentFixture<IntrovideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrovideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntrovideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
