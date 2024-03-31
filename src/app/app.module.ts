import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
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
    HttpClientModule


  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
