import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditEstatePage } from './edit-estate.page';

describe('EditEstatePage', () => {
  let component: EditEstatePage;
  let fixture: ComponentFixture<EditEstatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEstatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditEstatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
