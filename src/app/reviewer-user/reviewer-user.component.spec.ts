import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerUserComponent } from './reviewer-user.component';

describe('ReviewerUserComponent', () => {
  let component: ReviewerUserComponent;
  let fixture: ComponentFixture<ReviewerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
