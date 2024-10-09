import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPropietarioEquipoComponent } from './form-propietario-equipo.component';

describe('FormPropietarioEquipoComponent', () => {
  let component: FormPropietarioEquipoComponent;
  let fixture: ComponentFixture<FormPropietarioEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPropietarioEquipoComponent]
    });
    fixture = TestBed.createComponent(FormPropietarioEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
