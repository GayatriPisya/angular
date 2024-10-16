import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginButtonFunctionComponent } from './login-button-function.component';

describe('LoginButtonFunctionComponent', () => {
  let component: LoginButtonFunctionComponent;
  let fixture: ComponentFixture<LoginButtonFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginButtonFunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginButtonFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
