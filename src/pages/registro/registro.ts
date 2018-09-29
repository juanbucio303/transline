import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
usern:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public proveedor : ProveedorProvider,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  add(username:any,pass:any,veripass:any){
    this.proveedor.getUserName(username)
    .then(data => {
      this.usern = data;
      console.log(data);
      if(data==false){
        if(pass==veripass){
          let datos={	"nombre_usuario":username,
                      "contra":pass
                    };
          this.proveedor.addUser(datos);
          this.navCtrl.popToRoot();
        }else{
          this.presentAlert('Error Contraseña',"la contraseña no coincide");
        }
      }else{
        this.presentAlert('Error Nombre de usuario',data);
      }
    });
    // console.log(this.username);
  }
  presentAlert(title,data) {
  let alert = this.alertCtrl.create({
    title: title,
    subTitle: data,
    buttons: ['Aceptar']
  });
  alert.present();
}
}
