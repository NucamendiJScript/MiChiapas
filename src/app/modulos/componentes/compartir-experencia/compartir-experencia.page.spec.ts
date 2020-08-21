import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompartirExperenciaPage } from './compartir-experencia.page';

describe('CompartirExperenciaPage', () => {
  let component: CompartirExperenciaPage;
  let fixture: ComponentFixture<CompartirExperenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompartirExperenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompartirExperenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
