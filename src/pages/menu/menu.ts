import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UnConductorPage} from '../un-conductor/un-conductor'
import { DosConductoresPage } from '../dos-conductores/dos-conductores';
import { DosCircuitosPage } from '../dos-circuitos/dos-circuitos';
import { MasDeDosConductoresPage } from '../mas-de-dos-conductores/mas-de-dos-conductores';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';
import { InicioPage } from '../inicio/inicio';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  tip:any;
  tipo:any;
  off:any;
  datos={	"id_resistencia":"112",
              "nombre":"pablo",
              "mm":"1",
              "ohm_km":"2"
            };
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public proveedor : ProveedorProvider) {
    // this.unConductor();
    this.tip=navParams.get('tipo');
    this.off=navParams.get('tip');
    // console.log(this.tip[0]["id_role"]);
    this.tipo=this.tip[0]["id_role"];
  }


  rediUnConductor(){
      this.navCtrl.push(UnConductorPage,{off:this.off});
  }
  rediMasDeDosConductors(){
    this.navCtrl.push(MasDeDosConductoresPage);
  }
  rediDosCircuitos(){
    this.navCtrl.push(DosCircuitosPage);
  }
  rediDosConductores(){
    this.navCtrl.push(DosConductoresPage);
  }
  setResistencia(){
    this.proveedor.addUser(this.datos);
  }
  borrar(){
    this.proveedor.borrar();
  }
  cerrar(){
    this.navCtrl.setRoot(InicioPage);
  }
usuarios:any=[]
  ionViewDidLoad() {
    console.log("datos:");
    // console.log(this.tipo);

   // console.log(this.usuarios);
   // this.proveedor.getDatos()
   // .then(data => {
   //   this.usuarios = data;
   //   console.log(this.usuarios);
   // });
 }

}
