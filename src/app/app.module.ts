import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TreeSelectModule } from 'primeng/treeselect';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from 'service/photoservice';
import { DepartureAirportService } from 'service/departureAirportService';
import { MultiSelectModule } from 'primeng/multiselect';
import { ItemsService } from 'service/itemsService';
import { DestinationService } from 'service/destinationService';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { CitiesComponent } from './cities/cities.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { ProductService } from 'service/productService';
import { HotelsComponent } from './hotels/hotels.component';
import { DataViewModule } from 'primeng/dataview';
import { TicketAndHotelComponent } from './ticket-and-hotel/ticket-and-hotel.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { ScrollTopModule } from 'primeng/scrolltop';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TravelExtrasComponent } from './travel-extras/travel-extras.component';
import { SidebarModule } from 'primeng/sidebar';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CitiesComponent,
    HotelsComponent,
    TicketAndHotelComponent,
    TravelExtrasComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TagModule,
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    MegaMenuModule,
    GalleriaModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    TreeSelectModule,
    MultiSelectModule,
    CalendarModule,
    InputNumberModule,
    ButtonModule,
    CardModule,
    OverlayPanelModule,
    SliderModule,
    RatingModule,
    CheckboxModule,
    TableModule,
    DataViewModule,
    BreadcrumbModule,
    DialogModule,
    ScrollTopModule,
    VirtualScrollerModule,
    SelectButtonModule,
    RadioButtonModule,
    SidebarModule,


  ],
  providers: [DestinationService, ItemsService, PhotoService, DepartureAirportService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
