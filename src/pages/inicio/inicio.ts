import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';
import { MenuPage } from '../menu/menu';
import { MenuAdminPage } from '../menu-admin/menu-admin';
import { RegistroPage } from '../registro/registro';
import { AlertController } from 'ionic-angular';
// import { File } from '@ionic-native/file';
// import { FileOpener } from '@ionic-native/file-opener';

// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
import * as math from 'mathjs';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import { PerdidasPage } from '../perdidas/perdidas';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public proveedor : ProveedorProvider,private alertCtrl: AlertController){
  // private plt: Platform, private file: File, private fileopen: FileOpener) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
    let rs = math.atan2(3, -3)/ math.pi;
    console.log(rs);
  }
   resp:any;
  verificar(user:any,pass:any){
    let datos=[user,pass];
    this.proveedor.getAutentificar(datos)
    .then(data => {
      this.resp = data;
      console.log(this.resp[0]['id_role']);
      if(this.resp[0]['id_role']==2){
        // this.navCtrl.push(MenuPage);
        this.navCtrl.setRoot(MenuPage,{tipo:this.resp[0]['id_role']});
      }else if(this.resp[0]['id_role']==1){
        this.navCtrl.setRoot(MenuAdminPage,{tipo:this.resp[0]['id_role']});

      }else{
        // alert(this.resp);
        this.presentAlert();
      }
    });
  }
  // prueba(){
  //   let dta={id:'1',estado:'2'};
  //   this.proveedor.updateUser(dta);
  // }
  registro(){
    this.navCtrl.push(RegistroPage);
  }
  redic(){
    this.navCtrl.push(MenuPage,{tip:"3",tipo:"0"});
    // this.navCtrl.push(PerdidasPage);

  }
  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Error Inicio de session',
    subTitle: this.resp,
    buttons: ['Aceptar']
  });
  alert.present();
}

}
