import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-novelties',
  templateUrl: './novelties.component.html',
  styleUrls: ['./novelties.component.css']
})
export class NoveltiesComponent {

  products: any[];

  responsiveOptions: any[];

  constructor(private productService: NewsService) {}

  ngOnInit() {
      this.productService.getProductsSmall().then((products) => {
          this.products = products;
      });

      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '90%',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }

  getSeverity(status: string) {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
        default:
            return 'unknown'; // Manejar cualquier otro estado desconocido
    }
}

goToNews(){
  window.open('https://youtu.be/zVR_271ZHiQ');
}

  onUrl(url: string) {
    window.open(url, '_blank');
  }
}
