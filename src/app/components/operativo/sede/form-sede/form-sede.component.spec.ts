import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSedeComponent } from './form-sede.component';

describe('FormSedeComponent', () => {
  let component: FormSedeComponent;
  let fixture: ComponentFixture<FormSedeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSedeComponent]
    });
    fixture = TestBed.createComponent(FormSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
