import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorPickerComponent } from './armor-picker.component';

describe('ArmorPickerComponent', () => {
  let component: ArmorPickerComponent;
  let fixture: ComponentFixture<ArmorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
