import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyEstatePage } from './my-estate.page';

describe('MyEstatePage', () => {
  let component: MyEstatePage;
  let fixture: ComponentFixture<MyEstatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEstatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyEstatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
