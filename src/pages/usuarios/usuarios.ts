import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProveedorProvider} from '../../providers/proveedor/proveedor';

/**
 * Generated class for the UsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {
dataUsr:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor:ProveedorProvider) {
    this.dataUsr=this.navParams.get('data');
    console.log(this.dataUsr);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosPage');
  }
  updateUsr(id,estado){
    let dta={id:id,estado:estado};
    this.proveedor.updateUser(dta);
    this.navCtrl.popToRoot();
  }

}
