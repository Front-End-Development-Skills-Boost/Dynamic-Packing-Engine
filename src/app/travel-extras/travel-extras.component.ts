import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-travel-extras',
  templateUrl: './travel-extras.component.html',
  styleUrls: ['./travel-extras.component.scss']
})
export class TravelExtrasComponent implements OnInit {

  //Continue彈窗
  visible2: boolean = false;
  showDialog2() {
    this.visible2 = true;
  }
  Luggage!: string;

  //麵包屑
  breadcrumb: MenuItem[] | undefined;
  
  //sidebar
  sidebarVisible: boolean = false;

  ngOnInit() {
    //麵包屑
    this.breadcrumb = [{ label: 'Home', url: "https://www.lufthansaholidays.com/en-de" }, { label: 'Portals Nous', url: "https://www.lufthansaholidays.com/en-de/search?t=package&los=3-7&dd=2024-04-11&rd=2025-09-07&edd=0&erd=0&travellers=25%2C25&category=3&minp=1&maxp=-1&perPage=10&page=1&recommendation=70&cur=EUR&dest=69233" },
    { label: 'Hotel details' }, { label: 'Extras' }, { label: 'Payment details' }];
  }

}
