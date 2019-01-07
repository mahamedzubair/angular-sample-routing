import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbossJmxComponent } from './jboss-jmx.component';

describe('JbossJmxComponent', () => {
  let component: JbossJmxComponent;
  let fixture: ComponentFixture<JbossJmxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbossJmxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbossJmxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
