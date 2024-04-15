import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CitiesComponent } from './cities/cities.component';
import { HotelsComponent } from './hotels/hotels.component';
import { TicketAndHotelComponent } from './ticket-and-hotel/ticket-and-hotel.component';

const routes: Routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'ticketAndHotel', component: TicketAndHotelComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
