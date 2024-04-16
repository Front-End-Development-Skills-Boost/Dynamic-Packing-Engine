import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { ItemsService } from '../../../service/itemsService';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-ticket-and-hotel',
  templateUrl: './ticket-and-hotel.component.html',
  styleUrls: ['./ticket-and-hotel.component.scss']
})

export class TicketAndHotelComponent implements OnInit{
  // 選單
  items: MegaMenuItem[] | undefined;
  //麵包屑
  breadcrumb: MenuItem[] | undefined;

  constructor(private itemsService: ItemsService){
  }

  ngOnInit() {
     // 選單
     this.itemsService.getItems().then((items) => {
      this.items = items;
    });

     //麵包屑
      this.breadcrumb = [{ label: 'Home', url:"https://www.lufthansaholidays.com/en-de"}, { label: 'Portals Nous',url:"https://www.lufthansaholidays.com/en-de/search?t=package&los=3-7&dd=2024-04-11&rd=2025-09-07&edd=0&erd=0&travellers=25%2C25&category=3&minp=1&maxp=-1&perPage=10&page=1&recommendation=70&cur=EUR&dest=69233" }, 
      { label: 'Hotel details' }, { label: 'Extras' }, { label: 'Payment details' }];
  }
  


}
