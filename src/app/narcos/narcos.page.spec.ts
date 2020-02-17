import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NarcosPage } from './narcos.page';

describe('NarcosPage', () => {
  let component: NarcosPage;
  let fixture: ComponentFixture<NarcosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarcosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NarcosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
