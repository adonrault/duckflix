import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LuciferPage } from './lucifer.page';

describe('LuciferPage', () => {
  let component: LuciferPage;
  let fixture: ComponentFixture<LuciferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuciferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LuciferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
