import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesjsonComponent } from './coursesjson.component';

describe('CoursesjsonComponent', () => {
  let component: CoursesjsonComponent;
  let fixture: ComponentFixture<CoursesjsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesjsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
