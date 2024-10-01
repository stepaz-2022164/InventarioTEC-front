import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaEmpleadosComponent } from './area-empleados.component';

describe('AreaEmpleadosComponent', () => {
  let component: AreaEmpleadosComponent;
  let fixture: ComponentFixture<AreaEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaEmpleadosComponent]
    });
    fixture = TestBed.createComponent(AreaEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
