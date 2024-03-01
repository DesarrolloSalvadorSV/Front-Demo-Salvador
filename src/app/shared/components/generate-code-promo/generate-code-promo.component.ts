import { endpointPromo } from './../../../../environments/environment.variables';
import { Component } from '@angular/core';
import { params } from 'src/environments/environment.variables';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-generate-code-promo',
  templateUrl: './generate-code-promo.component.html',
  styleUrls: ['./generate-code-promo.component.css']
})
export class GenerateCodePromoComponent {

  _codePromo: params
  _company: params
  _url: string = '';
  urlpromo = endpointPromo.url

  constructor(
    private clipboard: Clipboard
  ){

  }

   generateUrl(_codePromo: params, _company: params){
      this._url = this.urlpromo + _codePromo + '/' + _company;
      this.clipboard.copy(this._url);
   }

}
