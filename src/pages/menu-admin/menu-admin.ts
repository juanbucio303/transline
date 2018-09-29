import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UsuariosPage} from '../usuarios/usuarios';
import {MenuPage} from '../menu/menu';
import {ResistenciasPage} from '../resistencias/resistencias';
import { ProveedorProvider} from '../../providers/proveedor/proveedor';
import { InicioPage } from '../inicio/inicio';

/**
 * Generated class for the MenuAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-admin',
  templateUrl: 'menu-admin.html',
})
export class MenuAdminPage {
id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: ProveedorProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuAdminPage');
    this.id=this.navParams.get("tipo");
    // console.log(this.id);
  }
  redic(url){
    console.log(url);
    switch(url){
      case 'user':
      this.proveedor.getAllUser().then(data => {
        this.navCtrl.push(UsuariosPage,{data:data});
      });
      break;
      case 'met':
      this.navCtrl.push(MenuPage,{tipo:this.id});
      break;
      case 'res':
      this.proveedor.getAllResisstencias().then(data=>{
        this.navCtrl.push(ResistenciasPage, {data:data});
      })
      break;

    }
  }
  cerrar(){
    this.navCtrl.setRoot(InicioPage);
  }
}
