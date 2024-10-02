import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietarioEquipoComponent } from './propietario-equipo.component';

describe('PropietarioEquipoComponent', () => {
  let component: PropietarioEquipoComponent;
  let fixture: ComponentFixture<PropietarioEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropietarioEquipoComponent]
    });
    fixture = TestBed.createComponent(PropietarioEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
