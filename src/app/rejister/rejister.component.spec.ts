import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejisterComponent } from './rejister.component';

describe('RejisterComponent', () => {
  let component: RejisterComponent;
  let fixture: ComponentFixture<RejisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
