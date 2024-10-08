import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoEmpleadoComponent } from './departamento-empleado.component';

describe('DepartamentoEmpleadoComponent', () => {
  let component: DepartamentoEmpleadoComponent;
  let fixture: ComponentFixture<DepartamentoEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentoEmpleadoComponent]
    });
    fixture = TestBed.createComponent(DepartamentoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
