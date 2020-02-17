import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessiahPage } from './messiah.page';

describe('MessiahPage', () => {
  let component: MessiahPage;
  let fixture: ComponentFixture<MessiahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessiahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessiahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
