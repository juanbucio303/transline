import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { MasDeDosConductoresPage } from '../mas-de-dos-conductores/mas-de-dos-conductores'

/**
 * Generated class for the ResmasdosconPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resmasdoscon',
  templateUrl: 'resmasdoscon.html',
})
export class ResmasdosconPage {

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
    // this.masDeDosConductores();
    this.Rcakm=navParams.get('Rcakm');
    this.DMG=navParams.get('DMG');
    this.RMG=navParams.get('RMG');
    this.Lkm=navParams.get('Lkm');
    this.xlkm=navParams.get('xlkm');
    this.ckm=navParams.get('ckm');
    this.Bckm=navParams.get('Bckm');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResmasdosconPage');
  }
  cerrarModal(){
   this.viewCtrl.dismiss();
  }

}
