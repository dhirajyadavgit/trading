import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrprtdialogComponent } from './thrprtdialog.component';

describe('ThrprtdialogComponent', () => {
  let component: ThrprtdialogComponent;
  let fixture: ComponentFixture<ThrprtdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThrprtdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrprtdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
