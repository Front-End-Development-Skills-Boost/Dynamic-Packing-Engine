import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CitiesComponent } from './cities/cities.component';
import { HotelsComponent } from './hotels/hotels.component';
import { TicketAndHotelComponent } from './ticket-and-hotel/ticket-and-hotel.component';
import { TravelExtrasComponent } from './travel-extras/travel-extras.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'ticketAndHotel', component: TicketAndHotelComponent },
  { path: 'travelExtras', component: TravelExtrasComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '**', redirectTo: 'homepage' } // 加入預設路徑
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
