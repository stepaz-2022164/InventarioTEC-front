import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteEquipoComponent } from './reporte-equipo.component';

describe('ReporteEquipoComponent', () => {
  let component: ReporteEquipoComponent;
  let fixture: ComponentFixture<ReporteEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteEquipoComponent]
    });
    fixture = TestBed.createComponent(ReporteEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
