import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { ResdoscircPage } from '../resdoscirc/resdoscirc';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';
import { PerdidasPage } from '../perdidas/perdidas';

/**
 * Generated class for the DosCircuitosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dos-circuitos',
  templateUrl: 'dos-circuitos.html',
})
export class DosCircuitosPage {
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
    console.log('ionViewDidLoad DosCircuitosPage');
    this.getDatos();
  }
  getParams(datos:any,tem:any,long:any,distancia:any,altura:any,d1:any,d2:any,d3:any){
    this.cad=datos+","+tem+","+long+","+distancia+","+altura+","+d1+","+d2+","+d3;
    this.resistVal=this.cad.split(",");
  }
  dosCircuitos(id){
    let d=0,Rcd=0,temperatura=0,longitud=0,diametro1=0,diametro2=0,diametro3=0,diametro4=0,diametro5=0;
    let dab=0,dbc=0,dca=0,r=0,Rcd1=0,Rcdkm=0,ys=0,Rcakm=0,Rca=0,dmg=0,DMG=0,RMG=0,dabb=0,daab=0;
    let L=0,Lkm=0,xl=0,xlkm=0,c=0,ckm=0,Bc=0,Bckm=0,n=0;
    let daabb=0,DMGab=0,DMGabT=0,dbcc=0,dbbc=0,dbbcc=0,DMGbc=0,DMGbcT=0,x1=0,x2=0,dcaa=0,dcca=0,dccaa=0;
    let DMGca=0,DMGcaT=0,DMG1=0,daaa=0,dbbb=0,dccc=0,RMGA=0,RMGB=0,RMGC=0,RMG1=0,Rcakm1=0,rr=0;
    d= parseFloat(this.resistVal[0]);
    Rcd= parseFloat(this.resistVal[1]);
    temperatura=parseFloat(this.resistVal[2]);
    longitud=parseFloat(this.resistVal[3]);
    diametro1=parseFloat(this.resistVal[4]);
    diametro2=parseFloat(this.resistVal[5]);
    diametro3=parseFloat(this.resistVal[6]);
    diametro4=parseFloat(this.resistVal[7]);
    diametro5=parseFloat(this.resistVal[8]);


    dab=diametro1;
    dabb= Math.sqrt(Math.pow(diametro1, 2)+Math.pow(diametro4, 2));
    //System.out.println(dabb);
    //double res=Math.pow(diametro4+(((diametro5-diametro4)/2)), 2)+(Math.pow(diametro2, 2));//((d4+((d5-d4)/2))^2)+(d2^2)
    daab=Math.sqrt(Math.pow(diametro4+(((diametro5-diametro4)/2)), 2)+(Math.pow(diametro2, 2)));
   //System.out.println(daab);
    daabb=Math.sqrt(Math.pow(diametro5-(diametro4+(((diametro5-diametro4)/2))), 2)+(Math.pow(diametro2, 2)));
    //System.out.println(daabb);
    DMGab=((dab)*(dabb)*(daab)*(daabb));
    //System.out.println(DMGab);
    DMGabT=Math.pow(DMGab,1.0/4.0);
    //System.out.println(DMGabT);
    dbc=daabb;
    dbcc=dabb;
    dbbc=daab;
    dbbcc=diametro1;
    DMGbc=((dbc)*(dbcc)*(dbbc)*(dbbcc));
    DMGbcT=Math.pow(DMGbc,1.0/4.0);
    x1=(diametro5-(diametro3+((diametro5-diametro3)/2)));
    x2=(diametro1+diametro2);
    dca=Math.sqrt(Math.pow(x1,2)+Math.pow(x2,2));
    //System.out.println(dca);
    dcaa=diametro5;
    dcca=diametro3;
    dccaa=dca;
    DMGca=((dca)*(dcaa)*(dcca)*(dccaa));
    DMGcaT=Math.pow(DMGca,1.0/4.0);
    DMG1=((DMGcaT)*(DMGbcT)*(DMGabT));
    DMG=Math.pow(DMG1,1.0/3.0);
    //System.out.println(DMG);


    r=(d/2)/1000;
    rr=r*(Math.pow(Math.exp(1), -1.0/4.0));//r*((exp(1))^(-1/4));
    //System.out.println(rr);


    daaa=Math.sqrt(Math.pow(diametro3+(diametro5-diametro3)/2,2)+(Math.pow(diametro1+diametro2, 2)));
    //System.out.println(daaa);
    dbbb=diametro4;
    dccc=daaa;

    RMGA=Math.sqrt(daaa*rr);
    RMGB=Math.sqrt(dbbb*rr);
    RMGC=Math.sqrt(dccc*rr);
    RMG1=((RMGA)*(RMGB)*(RMGC));
    RMG=Math.pow(RMG1,1.0/3.0);

    Rcd1=Rcd*(1+(0.0037*(temperatura-20)));
    Rcdkm=Rcd1*longitud;
    ys=(7.5*((Math.pow(60, 2))*(Math.pow((d/10), 4)*(1e-7))));//(7.5*((60^2)*(d/10)^4*(1e-7)));
    Rcakm1=Rcdkm*(1+ys);
    Rcakm=(Rcakm1*Rcakm1)/(Rcakm1+Rcakm1);
    Rca=Rcakm/longitud;

    L=4.606*(Math.pow(10, -7))*(Math.log10(DMG/RMG));//(4.606*10^(-7))*(log10((DMG/RMG)));
    Lkm=L*1000*longitud;
    xl=0.1736*Math.log10((DMG/RMG));
    xlkm=xl*longitud;
    c=2*(Math.PI)*(8.854*(Math.pow(10, -12))/Math.log(DMG/RMG));//(2*(pi)*(8.854*10^(-12)))/(log(DMG/RMG));
    ckm=(c*1000*longitud);
    Bc=9.085*Math.pow(10, -6)/Math.log10(DMG/RMG);//(9.085*10^(-6))/(log10(DMG/RMG));
    Bckm=Bc*longitud;

    this.Rcakm = Rcakm;
    this.DMG = DMG;
    this.RMG = RMG;
    this.Lkm = Lkm;
    this.xlkm = xlkm;
    this.ckm = ckm;
    this.Bckm = Bckm;
    console.log(this.RMG);
    console.log(this.Lkm);
    console.log(this.xlkm);
    if(id==1){
      let modal = this.modalCtrl.create(ResdoscircPage,{Rcakm:this.Rcakm,DMG:this.DMG,RMG:this.RMG,Lkm:this.Lkm,xlkm:this.xlkm,ckm:this.ckm,Bckm:this.Bckm});
      modal.present();
    }else{
      let modal = this.modalCtrl.create(PerdidasPage,{Rcakm:this.Rcakm,xlkm:this.xlkm,Bckm:this.Bckm});
      modal.present();
    }
  }
  // modal() {
  //   let modal = this.modalCtrl.create(ResdoscircPage,{resistVal:this.resistVal});
  //   modal.present();
  // }

}
