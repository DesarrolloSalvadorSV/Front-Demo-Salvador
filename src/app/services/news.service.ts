import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getProductsData() {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        image: 'bamboo-watch.jpg',
        url: 'https://youtu.be/zVR_271ZHiQ'
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        image: 'black-watch.jpg',
        url: 'https://www.google.com/'
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        image: 'blue-band.jpg',
        url: 'https://www.google.com/'
      },
      {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        image: 'blue-t-shirt.jpg',
        url: 'https://www.google.com/'
      },
      {
        id: '1004',
        code: 'h456wer53',
        name: 'Bracelet',
        url: 'https://www.google.com/'
      },
      {
        id: '1005',
        code: 'av2231fwg',
        name: 'Brown Purse',
        image: 'brown-purse.jpg',
        url: 'https://www.google.com/'
      },
      {
        id: '1006',
        code: 'bib36pfvm',
        name: 'Chakra Bracelet',
        image: 'chakra-bracelet.jpg',
        url: 'https://www.google.com/'
      },
      {
        id: '1007',
        code: 'mbvjkgip5',
        name: 'Galaxy Earrings',
        image: 'galaxy-earrings.jpg',
        url: 'https://www.google.com/'
      },
      {
        id: '1008',
        code: 'vbb124btr',
        name: 'Game Controller',
        image: 'game-controller.jpg',
        url: 'https://www.google.com/'
      },
    ];
  }

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
}
}
