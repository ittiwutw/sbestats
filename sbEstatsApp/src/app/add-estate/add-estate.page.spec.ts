import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEstatePage } from './add-estate.page';

describe('AddEstatePage', () => {
  let component: AddEstatePage;
  let fixture: ComponentFixture<AddEstatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEstatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEstatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
