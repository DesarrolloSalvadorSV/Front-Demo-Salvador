import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router:Router) {

  }

  ngOnInit() {
    this.menu();
  }

  menu(){
    this.items = [
      {
        label: 'Explorar',
        items: [
          {
            label: 'Inicio',
            icon: 'pi pi-home',
            routerLink: 'inicio'
          },
        ],
      },
      {
        label: 'Mi Billetera',
        items: [
          {
            label: 'Uso de Billetera',
            icon: 'pi pi-wallet',
            routerLink: 'billetera',
          },
          {
            label: 'Novedades',
            icon: 'pi pi-megaphone',
            routerLink: 'novedades',
          },
        ],
      },
      {
        label: 'Mi Historial',
        items: [
          {
            label: 'Enviadas',
            icon: 'pi pi-send',
            routerLink: 'transaciones-enviadas'
          },
          {
            label: 'Depositos',
            icon: 'pi pi-money-bill',
            routerLink: 'detalle-deposito'
          },
          {
            label: 'Recibidas',
            icon: 'pi pi-arrow-left',
            routerLink: 'transaciones-recibidas'
          },

          {
            label: 'Retiros',
            icon: 'pi pi-arrow-right',
            routerLink: 'detalle-retiros'
          },
        ],
      },
      {
        label: 'Mi Cuenta',
        items: [
          {
            label: 'Verificar cuenta ',
            icon: 'pi pi-check ',
            url: 'https://clientes.salvadorsv.com/informacion-cliente/verificacion',
          },
          {
            label: 'Centro de ayuda',
            icon: 'pi pi-question',
            url: 'https://salvadorsv.com/centrodeayuda/',
          },
          {
            label: 'Ir a la pagina web',
            icon: 'pi pi-globe',
            url: 'https://salvadorsv.com/',
          },
          {
            label: 'Salir',
            icon: 'pi pi-sign-out',
            command: () => {
                this.logout();
              },
          },
        ],
      }
    ];
  }

  logout(){
    localStorage.removeItem('userApiKey');
    this.router.navigateByUrl('/login');
  }

  efectos() {
    this.isClassEnabled = !this.isClassEnabled;
  }

}
