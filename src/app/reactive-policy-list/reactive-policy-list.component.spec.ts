import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePolicyListComponent } from './reactive-policy-list.component';

describe('ReactivePolicyListComponent', () => {
  let component: ReactivePolicyListComponent;
  let fixture: ComponentFixture<ReactivePolicyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivePolicyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivePolicyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
