import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {
  getData() {
    // menu 內容暫改為目前流程的各個頁面，方便demo，完整流程建立後可再修改回來
    return [
      {
        // label: 'Top Deals'
        label: 'HomePage',
        routerLink: ['homepage']
      },
      {
        label: 'Cities',
        routerLink: ['cities']
      },
      {
        // label: 'Last Minute'
        label: 'Hotel',
        routerLink: ['hotels']
      },
      {
        label: 'Ticket and Hotel',
        routerLink: ['ticketAndHotel']
      },
      {
        label: 'City trips',
        items: [
          [
            {
              label: 'Top 10',
              items: [{ label: 'Vienna' }, { label: 'New York' }, { label: 'Barcelona' }, { label: 'London' }, { label: 'Rome' },
              { label: 'Budapest' }, { label: 'Las Vegas' }, { label: 'Milan' }, { label: 'Copenhagen' }]
            },
            {
              label: 'Video 2',
              items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
            }
          ],
          [
            {
              label: 'Video 3',
              items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
            },
            {
              label: 'Video 4',
              items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
            }
          ]
        ]
      },
      {
        label: 'Beach Hoildays',
        items: [
          [
            {
              label: 'User 1',
              items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
            },
            {
              label: 'User 2',
              items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
            }
          ],
          [
            {
              label: 'User 3',
              items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
            },
            {
              label: 'User 4',
              items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
            }
          ],
          [
            {
              label: 'User 5',
              items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
            },
            {
              label: 'User 6',
              items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
            }
          ]
        ]
      },
      {
        label: 'Travel inspirations',
        items: [
          [
            {
              label: 'Event 1',
              items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
            },
            {
              label: 'Event 2',
              items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
            }
          ],
          [
            {
              label: 'Event 3',
              items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
            },
            {
              label: 'Event 4',
              items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
            }
          ]
        ]
      },
      // {
      //   label: 'Miles & More Collection',
      // },
      // {
      //   label: 'Pure luxury',
      // },
      // {
      //   label: 'Travel Tip',
      // }
    ];
  }

  getItems() {
    return Promise.resolve(this.getData());
  }
};
