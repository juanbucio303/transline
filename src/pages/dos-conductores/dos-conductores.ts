import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { ResdosconPage } from '../resdoscon/resdoscon';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';
import { PerdidasPage } from '../perdidas/perdidas';


/**
 * Generated class for the DosConductoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dos-conductores',
  templateUrl: 'dos-conductores.html',
})
export class DosConductoresPage {
  usuarios:any=[];
  resistVal:any=[];
  cad:string="";
  Rcakm:number;
  DMG:number;
  RMG:number;
  Lkm:number;
  xlkm:number;
  ckm:number;
  Bckm:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
  public viewCtrl: ViewController, public proveedor: ProveedorProvider) {
  }

  getDatos(){
    this.proveedor.getDatos()
    .then(data => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DosConductoresPage');
    this.getDatos();
  }

  getParams(datos:any,tem:any,long:any,distancia:any,altura:any,d1:any,d2:any){
    this.cad=datos+","+tem+","+long+","+distancia+","+altura+","+d1+","+d2;
    this.resistVal=this.cad.split(",");

  }
  dosConductores(id){

    let d,Rcd=0,temperatura=0,longitud=0,diametro1=0,diametro2=0,altura=0,distancia=0;
    let dab=0,dbc=0,dca=0,r=0,Rcd1=0,Rcdkm=0,ys=0,Rcakm=0,Rca=0,dmg=0,DMG=0,RMG=0,rr=0,rca=0;
    let L=0,Lkm=0,xl=0,xlkm=0,c=0,ckm=0,Bc=0,Bckm=0,n=0;

    d=parseFloat(this.resistVal[0]);
    Rcd=parseFloat(this.resistVal[1]);
    temperatura=parseFloat(this.resistVal[2]);
    longitud=parseFloat(this.resistVal[3]);
    distancia=parseFloat(this.resistVal[4]);
    diametro1=parseFloat(this.resistVal[5]);
    diametro2=parseFloat(this.resistVal[6]);
    altura=parseFloat(this.resistVal[7]);

    dab=Math.sqrt((Math.pow(diametro1, 2))+(Math.pow(altura, 2)));//sqrt((d1^2)+(altura^2));
    dbc=Math.sqrt((Math.pow(diametro2, 2))+(Math.pow(altura, 2)));//sqrt((d2^2)+(altura^2));
    dca=diametro1+diametro2;

    r=(d/2)/1000;
    Rcd1=Rcd*(1+(0.0037*(temperatura-20)));
    Rcdkm=Rcd1*longitud;
    ys=(7.5*((Math.pow(60, 2))*(Math.pow((d/10), 4)*(1e-7))));//(7.5*((60^2)*(d/10)^4*(1e-7)));
    //System.out.println(ys+"\n6.8431e-05");
    rca=Rcdkm*(1+ys);
    Rcakm=(rca*rca)/(rca+rca);
    Rca=Rcakm/longitud;


    dmg=((dab)*(dbc)*(dca));
    //System.out.println(dmg);
    n=1.0/3.0;
    //System.out.println(n);
    DMG=Math.pow(dmg,n);//nthroot(dmg,3);
    //System.out.println(DMG);
    rr=r*(Math.pow(Math.exp(1), -1.0/4.0));
    //System.out.println(rr+"\n\n");
    RMG=Math.sqrt(rr*distancia);//r*((exp(1))^(-1/4));
    //System.out.println(RMG);

    L=4.606*(Math.pow(10, -7))*(Math.log10(DMG/RMG));//(4.606*10^(-7))*(log10((DMG/RMG)));
    //System.out.println(L);
    Lkm=L*1000*longitud;
    xl=0.1736*Math.log10(DMG/RMG);//0.1736*log10((DMG/RMG));
    xlkm=xl*longitud;
    c=2*(Math.PI)*(8.854*(Math.pow(10, -12))/Math.log(DMG/RMG));//(2*(pi)*(8.854*10^(-12)))/(log(DMG/RMG));
    //System.out.println(c);
    ckm=(c*1000*longitud);
    Bc=(9.085* Math.pow(10, -6))/(Math.log10(DMG/RMG));//(9.085*10^(-6))/(log10(DMG/RMG));
    Bckm=Bc*longitud;

    this.Rcakm = Rcakm;
    this.DMG = DMG;
    this.RMG = RMG;
    this.Lkm = Lkm;
    this.xlkm = xlkm;
    this.ckm = ckm;
    this.Bckm = Bckm;
    if(id==1){
      let modal = this.modalCtrl.create(ResdosconPage,{Rcakm:this.Rcakm,DMG:this.DMG,RMG:this.RMG,Lkm:this.Lkm,xlkm:this.xlkm,ckm:this.ckm,Bckm:this.Bckm});
      modal.present();
    }else{
      let modal = this.modalCtrl.create(PerdidasPage,{Rcakm:this.Rcakm,xlkm:this.xlkm,Bckm:this.Bckm});
      modal.present();
    }
  }
  // modal() {
  //   let modal = this.modalCtrl.create(ResdosconPage,{resistVal:this.resistVal});
  //   modal.present();
  // }
}
