import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelExtrasComponent } from './travel-extras.component';

describe('TravelExtrasComponent', () => {
  let component: TravelExtrasComponent;
  let fixture: ComponentFixture<TravelExtrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelExtrasComponent]
    });
    fixture = TestBed.createComponent(TravelExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
