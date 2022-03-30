import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbasicComponent } from './formbasic.component';

describe('FormbasicComponent', () => {
  let component: FormbasicComponent;
  let fixture: ComponentFixture<FormbasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
