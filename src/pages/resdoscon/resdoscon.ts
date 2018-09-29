import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { DosConductoresPage } from '../dos-conductores/dos-conductores'

/**
 * Generated class for the ResdosconPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resdoscon',
  templateUrl: 'resdoscon.html',
})
export class ResdosconPage {
  Rcakm:number;
  DMG:number;
  RMG:number;
  Lkm:number;
  xlkm:number;
  ckm:number;
  Bckm:number;
  // resistVal:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    // this.resistVal=navParams.get('resistVal');
    // this.dosConductores();
    this.Rcakm=navParams.get('Rcakm');
    this.DMG=navParams.get('DMG');
    this.RMG=navParams.get('RMG');
    this.Lkm=navParams.get('Lkm');
    this.xlkm=navParams.get('xlkm');
    this.ckm=navParams.get('ckm');
    this.Bckm=navParams.get('Bckm');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResdosconPage');
  }
  cerrarModal(){
   this.viewCtrl.dismiss();
  }

}
