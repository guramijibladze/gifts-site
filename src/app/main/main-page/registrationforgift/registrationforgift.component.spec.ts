import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationforgiftComponent } from './registrationforgift.component';

describe('RegistrationforgiftComponent', () => {
  let component: RegistrationforgiftComponent;
  let fixture: ComponentFixture<RegistrationforgiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationforgiftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationforgiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
