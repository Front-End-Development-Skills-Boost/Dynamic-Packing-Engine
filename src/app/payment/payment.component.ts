import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


interface Salutation {
  name: string;
  code: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})

export class PaymentComponent implements OnInit {

  //麵包屑
  breadcrumb: MenuItem[] | undefined;
  //Login and redeem miles
  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }
  //乘客資料列
  salutations: Salutation[] | undefined;
  selectedSalutation: Salutation | undefined;
  //payment
  payment!: string;
  //sidebar stars
  stars: number = 4;

  ngOnInit() {
    //麵包屑
    this.breadcrumb = [{ label: 'Home', url: "https://www.lufthansaholidays.com/en-de" }, { label: 'Portals Nous', url: "https://www.lufthansaholidays.com/en-de/search?t=package&los=3-7&dd=2024-04-11&rd=2025-09-07&edd=0&erd=0&travellers=25%2C25&category=3&minp=1&maxp=-1&perPage=10&page=1&recommendation=70&cur=EUR&dest=69233" },
    { label: 'Hotel details' }, { label: 'Extras' }, { label: 'Payment details' }];

    //乘客資料列
    this.salutations = [
      { name: 'Mr.', code: 'Mr.' },
      { name: 'Mrs. / Ms.', code: 'Mrs. / Ms.' }
  ];
  }
}
