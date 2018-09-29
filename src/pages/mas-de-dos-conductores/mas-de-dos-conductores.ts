import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { ResmasdosconPage } from '../resmasdoscon/resmasdoscon';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';
import { PerdidasPage } from '../perdidas/perdidas';
/**
 * Generated class for the MasDeDosConductoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mas-de-dos-conductores',
  templateUrl: 'mas-de-dos-conductores.html',
})
export class MasDeDosConductoresPage {
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
    console.log('ionViewDidLoad MasDeDosConductoresPage');
    this.getDatos();
  }
  getParams(datRes:any,nocond:any,tem:any,long:any,distancia2:any,altura:any,distancia1:any,diametro1:any,diametro2:any){
    this.cad=datRes+","+nocond+","+tem+","+long+","+distancia2+","+altura+","+distancia1+","+diametro1+","+diametro2;
    this.resistVal=this.cad.split(",");
  }

  masDeDosConductores(id){
    let d=0,Rcd=0,temperatura=0,longitud=0,diametro1=0,diametro2=0,altura=0,distancia=0,distancia2=0;
    let dab=0,dbc=0,dca=0,r=0,Rcd1=0,Rcdkm=0,ys=0,Rcakm=0,Rca,dmg=0,DMG=0,RMG=0;
    let L=0,Lkm=0,xl=0,xlkm=0,c=0,ckm=0,Bc=0,Bckm=0,n=0,no_conduc=0;
    let rcakm=0,Rc=0,Rcd11=0,suma=0,num=0,rr=0,R1=0,R2=0,Rr=0,R=0;

    d=parseFloat(this.resistVal[0]);
    Rcd=parseFloat(this.resistVal[1]);
    no_conduc=parseFloat(this.resistVal[2]);
    temperatura=parseFloat(this.resistVal[3]);
    longitud=parseFloat(this.resistVal[4]);
    distancia2=parseFloat(this.resistVal[5]);
    altura=parseFloat(this.resistVal[6]);
    distancia=parseFloat(this.resistVal[7]);
    diametro1=parseFloat(this.resistVal[8]);
    diametro2=parseFloat(this.resistVal[9]);

    dab=Math.sqrt((Math.pow(diametro1, 2))+(Math.pow(altura, 2)));//sqrt((d1^2)+(altura^2));
    dbc=Math.sqrt((Math.pow(diametro2, 2))+(Math.pow(altura, 2)));//sqrt((d2^2)+(altura^2));
    dca=diametro1+diametro2;

    r=(d/2)/1000;
    console.log(Rcd+" "+(.0037*(temperatura-20)));
    Rcd1=Rcd*(1+(0.0037*(temperatura-20)));
    console.log("Rcd1: "+Rcd1);
    Rcdkm=Rcd1*longitud;
    ys=(7.5*((Math.pow(60, 2))*(Math.pow((d/10), 4)*(1e-7))));//(7.5*((60^2)*(d/10)^4*(1e-7)));
    //System.out.println(ys+"\n6.8431e-05");
    rcakm=Rcdkm*(1+ys);

    Rc=rcakm;
    Rcd11=1/Rc;
    suma=0;

    for (let i = 0; i < no_conduc; i++) {
        num=Rcd11;
        suma=suma+num;
        //System.out.println(suma);
    }
    console.log("suma"+suma);
    Rcakm=1/suma;
    Rca=Rcakm/longitud;


    dmg=((dab)*(dbc)*(dca));
    //System.out.println(dmg+"\n");
    n=1.0/3.0;
    //System.out.println(n);
    DMG=Math.pow(dmg,n);//nthroot(dmg,3);
    //System.out.println(DMG);


    rr=r*(Math.pow(Math.exp(1), -1.0/4.0));
    //System.out.println(rr+"\n\n");
    R1=distancia+distancia2;
    //System.out.println(R1);
    R2=no_conduc*(Math.sin(Math.PI/no_conduc));
    //System.out.println(R2);
    R=R1/R2;
    //System.out.println(R+"\n\n");
    Rr= ((no_conduc*rr)/R);

    RMG=R*(Math.pow(Rr, 1.0/no_conduc));//r*((exp(1))^(-1/4));
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
      let modal = this.modalCtrl.create(ResmasdosconPage,{Rcakm:this.Rcakm,DMG:this.DMG,RMG:this.RMG,Lkm:this.Lkm,xlkm:this.xlkm,ckm:this.ckm,Bckm:this.Bckm});
      modal.present();
    }else{
      let modal = this.modalCtrl.create(PerdidasPage,{Rcakm:this.Rcakm,xlkm:this.xlkm,Bckm:this.Bckm});
      modal.present();
    }
  }
  // modal() {
  //   let modal = this.modalCtrl.create(ResmasdosconPage,{resistVal:this.resistVal});
  //   modal.present();
  // }
}
