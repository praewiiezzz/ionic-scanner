import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  barcodeText = "Scan something...";
  barcodeFormat = "Scan something...";

  constructor(public navCtrl: NavController, public scanner: BarcodeScanner) {

  }

  public scan() 
  {
    
  }

}
