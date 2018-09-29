import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { UnConductorPage } from '../un-conductor/un-conductor'
import { DosConductoresPage } from '../dos-conductores/dos-conductores'
/**
 * Generated class for the ResultadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {

Rcakm:number;
DMG:number;
RMG:number;
Lkm:number;
xlkm:number;
ckm:number;
Bckm:number;
// resistVal:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    // console.log(navParams.get('resistVal'));
    // this.resistVal=navParams.get('resistVal');
    this.Rcakm=navParams.get('Rcakm');
    this.DMG=navParams.get('DMG');
    this.RMG=navParams.get('RMG');
    this.Lkm=navParams.get('Lkm');
    this.xlkm=navParams.get('xlkm');
    this.ckm=navParams.get('ckm');
    this.Bckm=navParams.get('Bckm');
          // this.unConductor();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');
  }
  cerrarModal(){

   this.viewCtrl.dismiss();
  }





}
