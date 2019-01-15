import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImapDashboardComponent } from './imap-dashboard.component';

describe('ImapDashboardComponent', () => {
  let component: ImapDashboardComponent;
  let fixture: ComponentFixture<ImapDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImapDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImapDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
