import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintdialogComponent } from './printdialog.component';

describe('PrintdialogComponent', () => {
  let component: PrintdialogComponent;
  let fixture: ComponentFixture<PrintdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
