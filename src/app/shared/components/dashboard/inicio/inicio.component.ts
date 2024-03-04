import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {


  constructor(private route : Router) {

   }

   billetera(){
    this.route.navigate(['sv/billetera']);
   }
}
