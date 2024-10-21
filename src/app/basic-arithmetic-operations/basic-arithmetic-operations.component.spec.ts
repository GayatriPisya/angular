import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicArithmeticOperationsComponent } from './basic-arithmetic-operations.component';

describe('BasicArithmeticOperationsComponent', () => {
  let component: BasicArithmeticOperationsComponent;
  let fixture: ComponentFixture<BasicArithmeticOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicArithmeticOperationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicArithmeticOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
