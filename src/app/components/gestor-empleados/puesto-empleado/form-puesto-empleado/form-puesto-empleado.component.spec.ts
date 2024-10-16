import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPuestoEmpleadoComponent } from './form-puesto-empleado.component';

describe('FormPuestoEmpleadoComponent', () => {
  let component: FormPuestoEmpleadoComponent;
  let fixture: ComponentFixture<FormPuestoEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPuestoEmpleadoComponent]
    });
    fixture = TestBed.createComponent(FormPuestoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
