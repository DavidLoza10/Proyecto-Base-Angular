import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRestaComponent } from './formulario-resta.component';

describe('FormularioRestaComponent', () => {
  let component: FormularioRestaComponent;
  let fixture: ComponentFixture<FormularioRestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
