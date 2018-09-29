import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { DosCircuitosPage } from '../dos-circuitos/dos-circuitos'

/**
 * Generated class for the ResdoscircPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resdoscirc',
  templateUrl: 'resdoscirc.html',
})
export class ResdoscircPage {

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
    // this.dosCircuitos();
    this.Rcakm=navParams.get('Rcakm');
    this.DMG=navParams.get('DMG');
    console.log(this.DMG);
    this.RMG=navParams.get('RMG');
    this.Lkm=navParams.get('Lkm');
    this.xlkm=navParams.get('xlkm');
    this.ckm=navParams.get('ckm');
    this.Bckm=navParams.get('Bckm');
    console.log(this.RMG);
    console.log(this.Lkm);
    console.log(this.xlkm);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResdoscircPage');
  }
  cerrarModal(){
   this.viewCtrl.dismiss();
  }

}
