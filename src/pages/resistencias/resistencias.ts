import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProveedorProvider} from '../../providers/proveedor/proveedor';
import { MenuAdminPage } from '../menu-admin/menu-admin';

/**
 * Generated class for the ResistenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resistencias',
  templateUrl: 'resistencias.html',
})
export class ResistenciasPage {
dataRes:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: ProveedorProvider) {
    this.dataRes=this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResistenciasPage');
  }
  updateRes(id,estado){
    let dta={id:id,estado:estado};
    this.proveedor.updateRes(dta);
    this.navCtrl.popToRoot();
  }
}
