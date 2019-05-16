import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUserComponent } from './user-user.component';

describe('UserUserComponent', () => {
  let component: UserUserComponent;
  let fixture: ComponentFixture<UserUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
