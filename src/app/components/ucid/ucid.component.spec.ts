import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcidComponent } from './ucid.component';

describe('UcidComponent', () => {
  let component: UcidComponent;
  let fixture: ComponentFixture<UcidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
