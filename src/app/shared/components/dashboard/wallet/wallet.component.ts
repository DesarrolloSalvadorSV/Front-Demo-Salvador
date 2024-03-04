import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {

  constructor(){

  }

  Irbilletera(){
    window.open("https://wa.link/salvadorsv", "_blank");

  }
}
