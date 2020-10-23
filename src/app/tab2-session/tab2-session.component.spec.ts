/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Tab2SessionComponent } from './tab2-session.component';

describe('Tab2SessionComponent', () => {
  let component: Tab2SessionComponent;
  let fixture: ComponentFixture<Tab2SessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2SessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2SessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
