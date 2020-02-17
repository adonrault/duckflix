import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LockandkeyPage } from './lockandkey.page';

describe('LockandkeyPage', () => {
  let component: LockandkeyPage;
  let fixture: ComponentFixture<LockandkeyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockandkeyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LockandkeyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
