import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlaAdjustmentComponent } from './gla-adjustment.component';

describe('GlaAdjustmentComponent', () => {
  let component: GlaAdjustmentComponent;
  let fixture: ComponentFixture<GlaAdjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlaAdjustmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlaAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
