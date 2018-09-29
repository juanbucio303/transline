import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { ResultadosPage } from '../resultados/resultados';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';
import { DatabaseProvider } from '../../providers/database/database';
import { PerdidasPage } from '../perdidas/perdidas';
// import * as lib from "../../assets/libreria.js";
// import { Prueba } from '../../assets/prueba.js';
// import * as Math from 'Mathjs';

/**
 * Generated class for the UnConductorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-un-conductor',
  templateUrl: 'un-conductor.html',
})
export class UnConductorPage {
  usuarios:any=[];
  resistVal:any=[];
  cad:string="";
  Rcakm:any;
  DMG:any;
  RMG:any;
  Lkm:any;
  xlkm:any;
  ckm:any;
  Bckm:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
  public viewCtrl: ViewController, public proveedor: ProveedorProvider, database: DatabaseProvider) {
      if(navParams.get('off')==3){
        database.create();
        database.getAll().then((data)=>{
          this.usuarios=data;
        });
      }else{
        this.getDatos();
      }
  }
  getDatos(){
    this.proveedor.getDatos()
    .then(data => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnConductorPage');
    // Prueba.con();
  }
  setArr(mm:any,tem:any,long:any,altura:any,d1:any,d2:any){
    this.cad=mm+","+tem+","+long+","+altura+","+d1+","+d2;
    this.resistVal=this.cad.split(",");
  }
  // modal() {
  //   let modal = this.modalCtrl.create(ResultadosPage,{resistVal:this.resistVal});
  //   modal.present();
  // }
  // modalP() {
  //   let modal2 = this.modalCtrl.create(PerdidasPage);
  //   modal2.present();
  // }
  unConductor(id){

    let temperatura,longitud,diametro1,diametro2,altura,d,Rcd,dab,dbc,dca:number,r,Rcd1,Rcdkm,ys,Rca,dmg;
    let L,xl,c,Bc,n,Rcakm,DMG=0,RMG,Lkm,xlkm,ckm,Bckm;
    d=this.resistVal[0];
    Rcd=this.resistVal[1];
    temperatura=this.resistVal[2];
    longitud=this.resistVal[3];
    altura=this.resistVal[4];
    diametro1= parseFloat(this.resistVal[5]);
    diametro2= parseFloat(this.resistVal[6]);
    // console.log(d+" "+Rcd+" "+temperatura+" "+longitud+" "+diametro1+" "+diametro2+" "+altura);
    dab=Math.sqrt((Math.pow(diametro1, 2))+(Math.pow(altura, 2)));//sqrt((d1^2)+(altura^2));
    // console.log(dab);
    dbc=Math.sqrt((Math.pow(diametro2, 2))+(Math.pow(altura, 2)));//sqrt((d2^2)+(altura^2));
    // console.log(dbc);
    dca=diametro1+diametro2;
    // console.log(dca);

    r=(d/2)/1000;
    Rcd1=Rcd*(1+(0.0037*(temperatura-20)));
    Rcdkm=Rcd1*longitud;
    ys=(7.5*((Math.pow(60, 2))*(Math.pow((d/10), 4)*(1e-7))));//(7.5*((60^2)*(d/10)^4*(1e-7)));
    //System.out.println(ys+"\n6.8431e-05");
    Rcakm=Rcd1*(1+ys);
    // console.log(Rcakm);
    Rca=Rcakm/longitud;


    dmg=((dab)*(dbc)*(dca));
    // console.log("dmg: "+dmg);
    n=1.0/3.0;
    //System.out.println(n);
    DMG=Math.pow(dmg,n);//nthroot(dmg,3);
    // console.log(DMG);
    RMG=r*(Math.pow((Math.exp(1)), -1.0/4.0));//r*((exp(1))^(-1/4));
    // console.log(RMG);

    L=4.606*(Math.pow(10, -7))*(Math.log10(DMG/RMG));//(4.606*10^(-7))*(log10((DMG/RMG)));
    //System.out.println(L);
    Lkm=L*1000*longitud;
    // console.log(Lkm);
    xl=0.1736*Math.log10(DMG/RMG);//0.1736*log10((DMG/RMG));
    xlkm=xl*longitud;
    c=2*(Math.PI)*(8.854*(Math.pow(10, -12))/Math.log(DMG/RMG));//(2*(pi)*(8.854*10^(-12)))/(log(DMG/RMG));
    // console.log(xlkm);
    ckm=(c*1000*longitud);
    // console.log(ckm);
    Bc=(9.085* Math.pow(10, -6))/(Math.log10(DMG/RMG));//(9.085*10^(-6))/(log10(DMG/RMG));
    Bckm=Bc*longitud;
    // console.log(Bckm);
    this.Rcakm = Rcakm;
    this.DMG = DMG;
    this.RMG = RMG;
    this.Lkm = Lkm;
    this.xlkm = xlkm;
    this.ckm = ckm;
    this.Bckm = Bckm;
    if(id==1){
      let modal = this.modalCtrl.create(ResultadosPage,{Rcakm:this.Rcakm,DMG:this.DMG,RMG:this.RMG,Lkm:this.Lkm,xlkm:this.xlkm,ckm:this.ckm,Bckm:this.Bckm});
      modal.present();
    }else{
      let modal = this.modalCtrl.create(PerdidasPage,{Rcakm:this.Rcakm,xlkm:this.xlkm,Bckm:this.Bckm});
      modal.present();
    }
  }
}
