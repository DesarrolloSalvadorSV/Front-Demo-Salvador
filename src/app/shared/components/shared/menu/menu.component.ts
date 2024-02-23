import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public isClassEnabled = false;
  showNotifications = false;
  items: MenuItem[];
  displaySidebar = false;
  menuStyles = {
    'backgroundColor': 'none',
    'color': 'white'
  };

  constructor() {

  }

  ngOnInit() {
    this.items = [
      {
        label: 'Explorar',
        items: [
          {
            label: 'Inicio',
            icon: 'pi pi-home',
            url: 'http://angular.io',
          },
        ],
      },
      {
        label: 'Mi Billetera',
        items: [
/*           {
            label: 'Ir a Billetera',
            icon: 'pi pi-wallet',
            url: 'http://angular.io',
          }, */
          {
            label: 'Uso de Billetera',
            icon: 'pi pi-wallet',
            url: 'http://angular.io',
          },
          {
            label: 'Novedades',
            icon: 'pi pi-megaphone',
            url: 'http://angular.io',
          },
        ],
      },
      {
        label: 'Mi Historial',
        items: [
          {
            label: 'Enviadas',
            icon: 'pi pi-send',
            command: () => {
              // this.update();
            },
          },
          {
            label: 'Depositos',
            icon: 'pi pi-money-bill',
            command: () => {
              //  this.delete();
            },
          },
          {
            label: 'Recibidas',
            icon: 'pi pi-arrow-left',
            command: () => {
              //  this.delete();
            },
          },

          {
            label: 'Retiros',
            icon: 'pi pi-arrow-right',
            command: () => {
              //this.delete();
            },
          },
        ],
      },
      {
        label: 'Mi Cuenta',
        items: [
          {
            label: 'Verificar cuenta ',
            icon: 'pi pi-check ',
            url: 'http://angular.io',
          },
          {
            label: 'Centro de ayuda',
            icon: 'pi pi-question',
            url: 'http://angular.io',
          },
          {
            label: 'Salir',
            icon: 'pi pi-sign-out',
            url: 'http://angular.io',
          },
        ],
      }
    ];

  }


  efectos() {
    this.isClassEnabled = !this.isClassEnabled;
  }
}
