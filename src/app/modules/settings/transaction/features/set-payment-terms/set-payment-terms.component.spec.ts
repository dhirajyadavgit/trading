import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPaymentTermsComponent } from './set-payment-terms.component';

describe('SetPaymentTermsComponent', () => {
  let component: SetPaymentTermsComponent;
  let fixture: ComponentFixture<SetPaymentTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPaymentTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPaymentTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
