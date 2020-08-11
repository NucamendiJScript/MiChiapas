import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CentrosTuristicoPage } from './centros-turistico.page';

describe('CentrosTuristicoPage', () => {
  let component: CentrosTuristicoPage;
  let fixture: ComponentFixture<CentrosTuristicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrosTuristicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CentrosTuristicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
