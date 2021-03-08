import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxesAndGstComponent } from './taxes-and-gst.component';

describe('TaxesAndGstComponent', () => {
  let component: TaxesAndGstComponent;
  let fixture: ComponentFixture<TaxesAndGstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxesAndGstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxesAndGstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
