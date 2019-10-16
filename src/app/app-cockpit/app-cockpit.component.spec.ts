import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCockpitComponent } from './app-cockpit.component';

describe('AppCockpitComponent', () => {
  let component: AppCockpitComponent;
  let fixture: ComponentFixture<AppCockpitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCockpitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
