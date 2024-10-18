import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckfunctionComponent } from './checkfunction.component';

describe('CheckfunctionComponent', () => {
  let component: CheckfunctionComponent;
  let fixture: ComponentFixture<CheckfunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckfunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
