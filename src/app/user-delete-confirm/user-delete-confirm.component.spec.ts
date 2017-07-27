import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeleteConfirmComponent } from './user-delete-confirm.component';

describe('UserDeleteConfirmComponent', () => {
  let component: UserDeleteConfirmComponent;
  let fixture: ComponentFixture<UserDeleteConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeleteConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
