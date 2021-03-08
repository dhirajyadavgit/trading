import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrsdialogComponent } from './trsdialog.component';

describe('TrsdialogComponent', () => {
  let component: TrsdialogComponent;
  let fixture: ComponentFixture<TrsdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrsdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
