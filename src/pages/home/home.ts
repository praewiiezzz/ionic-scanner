import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  barcodeText = "Scan something...";
  barcodeFormat = "Scan something...";

  constructor(public navCtrl: NavController, public scanner: BarcodeScanner) {

  }

  public scan() {
    let option = {showTorchButton : true};

    this.scanner.scan(option).then((barcodeData) => {
      console.log('BarcodeData', barcodeData)
      this.barcodeText = barcodeData.text;
      this.barcodeFormat = barcodeData.format;
    });
  }

}
