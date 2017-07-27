import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UstMenuComponent } from './ust-menu.component';

describe('UstMenuComponent', () => {
  let component: UstMenuComponent;
  let fixture: ComponentFixture<UstMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UstMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UstMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
