import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEquipoComponent } from './form-equipo.component';

describe('FormEquipoComponent', () => {
  let component: FormEquipoComponent;
  let fixture: ComponentFixture<FormEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEquipoComponent]
    });
    fixture = TestBed.createComponent(FormEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
