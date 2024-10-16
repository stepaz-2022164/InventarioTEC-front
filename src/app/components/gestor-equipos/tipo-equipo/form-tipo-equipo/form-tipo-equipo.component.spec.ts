import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTipoEquipoComponent } from './form-tipo-equipo.component';

describe('FormTipoEquipoComponent', () => {
  let component: FormTipoEquipoComponent;
  let fixture: ComponentFixture<FormTipoEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTipoEquipoComponent]
    });
    fixture = TestBed.createComponent(FormTipoEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
