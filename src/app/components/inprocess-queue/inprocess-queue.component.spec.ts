import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InprocessQueueComponent } from './inprocess-queue.component';

describe('InprocessQueueComponent', () => {
  let component: InprocessQueueComponent;
  let fixture: ComponentFixture<InprocessQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InprocessQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InprocessQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
