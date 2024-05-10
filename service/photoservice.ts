import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
    getData() {
        return [
            {
                itemImageSrc: 'https://lhhcdn.wavecdn.net/dniojkjnx/image/upload/w_1920,h_480,c_fill/v1714724707/common/jlhdixaptbeayouspbfv.png',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpghttps://lhhcdn.wavecdn.net/dniojkjnx/image/upload/w_1920,h_480,c_fill/v1714724707/common/jlhdixaptbeayouspbfv.png',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'https://lhhcdn.wavecdn.net/dniojkjnx/image/upload/w_1920,h_480,c_fill/v1714467676/common/licrkjgcc0gvrwz7lxgy.jpg',
                thumbnailImageSrc: 'https://lhhcdn.wavecdn.net/dniojkjnx/image/upload/w_1920,h_480,c_fill/v1714467676/common/licrkjgcc0gvrwz7lxgy.jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'https://lhhcdn.wavecdn.net/dniojkjnx/image/upload/w_1920,h_480,c_fill/v1714982461/common/ggrmx9v5na5rrzxy4ud1.jpg',
                thumbnailImageSrc: 'https://lhhcdn.wavecdn.net/dniojkjnx/image/upload/w_1920,h_480,c_fill/v1714982461/common/ggrmx9v5na5rrzxy4ud1.jpg',
                alt: 'Description for Image 3',
                title: 'Title 3'
            }
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};
