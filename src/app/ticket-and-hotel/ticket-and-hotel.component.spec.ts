import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketAndHotelComponent } from './ticket-and-hotel.component';

describe('TicketAndHotelComponent', () => {
  let component: TicketAndHotelComponent;
  let fixture: ComponentFixture<TicketAndHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketAndHotelComponent]
    });
    fixture = TestBed.createComponent(TicketAndHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
