import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDataComponent } from './view-data.component';

describe('ViewDataComponent', () => {
  let component: ViewDataComponent;
  let fixture: ComponentFixture<ViewDataComponent>;

  /**
   * Before each test, configure the testing module by importing the necessary
   * components and services. Then, create a test host component and detect
   * changes.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * The component should be created successfully.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

