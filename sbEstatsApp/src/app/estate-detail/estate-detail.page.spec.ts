import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstateDetailPage } from './estate-detail.page';

describe('EstateDetailPage', () => {
  let component: EstateDetailPage;
  let fixture: ComponentFixture<EstateDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstateDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
