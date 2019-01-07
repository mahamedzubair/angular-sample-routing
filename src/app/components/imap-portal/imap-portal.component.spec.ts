import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImapPortalComponent } from './imap-portal.component';

describe('ImapPortalComponent', () => {
  let component: ImapPortalComponent;
  let fixture: ComponentFixture<ImapPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImapPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImapPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
