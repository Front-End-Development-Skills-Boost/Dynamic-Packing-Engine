import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { ItemsService } from '../../../service/itemsService';
import { MenuItem } from 'primeng/api';
import { PhotoService } from 'service/photoservice';

@Component({
  selector: 'app-ticket-and-hotel',
  templateUrl: './ticket-and-hotel.component.html',
  styleUrls: ['./ticket-and-hotel.component.scss']
})

export class TicketAndHotelComponent implements OnInit {

  // 選單
  items: MegaMenuItem[] | undefined;
  //麵包屑
  breadcrumb: MenuItem[] | undefined;
  //stars
  stars: number = 5;
  //照片輪播
  images: any[] | undefined;
  responsiveOptions: any[] | undefined;
  //Amenities彈窗
  visible: boolean = false;
  showDialog() {
      this.visible = true;
  }

  constructor(private itemsService: ItemsService, private photoService: PhotoService) {
  }

  ngOnInit() {
    // 選單
    this.itemsService.getItems().then((items) => {
      this.items = items;
    });

    //麵包屑
    this.breadcrumb = [{ label: 'Home', url: "https://www.lufthansaholidays.com/en-de" }, { label: 'Portals Nous', url: "https://www.lufthansaholidays.com/en-de/search?t=package&los=3-7&dd=2024-04-11&rd=2025-09-07&edd=0&erd=0&travellers=25%2C25&category=3&minp=1&maxp=-1&perPage=10&page=1&recommendation=70&cur=EUR&dest=69233" },
    { label: 'Hotel details' }, { label: 'Extras' }, { label: 'Payment details' }];

    //照片輪播
    this.photoService.getImages().then((images) => (this.images = images));
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }



}
