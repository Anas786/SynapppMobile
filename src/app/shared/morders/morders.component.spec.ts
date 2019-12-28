import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MordersComponent } from './morders.component';

describe('MordersComponent', () => {
  let component: MordersComponent;
  let fixture: ComponentFixture<MordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MordersComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
