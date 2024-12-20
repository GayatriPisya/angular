import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCheckComponent } from './number-check.component';

describe('NumberCheckComponent', () => {
  let component: NumberCheckComponent;
  let fixture: ComponentFixture<NumberCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
