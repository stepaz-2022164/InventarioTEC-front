import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReporteEquipoComponent } from './form-reporte-equipo.component';

describe('FormReporteEquipoComponent', () => {
  let component: FormReporteEquipoComponent;
  let fixture: ComponentFixture<FormReporteEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormReporteEquipoComponent]
    });
    fixture = TestBed.createComponent(FormReporteEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
