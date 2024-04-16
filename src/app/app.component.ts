
import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { ItemsService } from 'service/itemsService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamicPackingEngine';
  // 選單
  items: MegaMenuItem[] | undefined;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    // 選單
    this.itemsService.getItems().then((items) => {
      this.items = items;
    });
  }
}

