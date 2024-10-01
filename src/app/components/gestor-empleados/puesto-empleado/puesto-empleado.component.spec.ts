import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestoEmpleadoComponent } from './puesto-empleado.component';

describe('PuestoEmpleadoComponent', () => {
  let component: PuestoEmpleadoComponent;
  let fixture: ComponentFixture<PuestoEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuestoEmpleadoComponent]
    });
    fixture = TestBed.createComponent(PuestoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
