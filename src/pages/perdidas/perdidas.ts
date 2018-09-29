import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as math from 'mathjs';
import { File } from '@ionic-native/file';
import * as jsPDF from 'jspdf';
// import * as pr from "../../assets/prueba";
// declare var mat:any;
/**
 * Generated class for the PerdidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perdidas',
  templateUrl: 'perdidas.html',
})
export class PerdidasPage {
  vol:any;
  poteR:any;
  facP:any;
  Rcakm:any;
  xlkm:any;
  Bckm:any;
  Vr:any;
  IR:any;
  VS:any;
  IS:any;
  angIr:any;
  angVs:any;
  angIs:any;
  Pe:any;
  n:any;
  Rv:any;

  doc:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.Rcakm=navParams.get('Rcakm');
    this.xlkm=navParams.get('xlkm');
    this.Bckm=navParams.get('Bckm');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerdidasPage');
    // pr.prueba();
  }
  cerrarModal(){
   this.viewCtrl.dismiss();
  }
  // perdida(vol,poteR,facP){
  perdida(){
  // console.log(math.add(1,1));
  let Bckm=this.Bckm,xlkm=this.xlkm,Rcakm=this.Rcakm;
  let vol=this.vol,poteR=this.poteR,facP=this.facP;
  let j=math.complex(0,1);
  let Ir=(poteR*(1e+6))/(math.sqrt(3)*(vol*(1e+3))*(facP));
  // console.log(Ir);
  let ang=math.acos(facP);
  // console.log(ang);
  // let a= Ir*math.cos(ang);
  // let b= math.multiply(math.multiply(Ir ,math.sin(ang)),j);
  let Irr=math.add(Ir*math.cos(ang),math.multiply(math.multiply(Ir ,math.sin(ang)),j));
  // console.log(Irr);
  let Vr=vol/math.sqrt(3);
  // console.log(Vr);
  let Yc=math.multiply(Bckm,j);
  // console.log(Yc);
  let Xl=math.multiply(xlkm,j);
  // console.log(Xl);
  let Zz=math.add(Rcakm,Xl);
  // console.log(Z);
  let rs=math.divide(Zz,Yc);
  let Zc=math.sqrt(rs);
  // let Zc=math.sqrt(math.divide(Zz,Yc));
  // console.log(Zc);
  let Yx=math.sqrt(math.multiply(Zz,Yc));
  // console.log(Yx);
  let A=math.cosh(Yx);
  // console.log(A);
  let B=math.multiply(Zc,(math.sinh(Yx)));
  // console.log(B);
  let C=math.multiply(math.divide(1,Zc),math.sinh(Yx));
  // console.log(C);
  let D=A;
  // console.log(D);
  let Vs=math.add(math.multiply(A,math.multiply(Vr,(1e+3))),math.multiply(B,Irr));
  // console.log(Vs);
  let Is=math.add(math.multiply(C,math.multiply(Vr,(1e+3))),math.multiply(D,Irr));
  // console.log(Is);
  let absVs=math.abs(Vs);
  // let absIs=math.abs(Vs);
  let Isa=math.abs(Is);
  // console.log(Isa);
  let Pe=math.multiply(3,math.multiply(math.pow(Isa,2),Rcakm));
  // console.log(Pe);
  let Rv=math.multiply(math.divide(math.subtract(math.abs(Vs),math.multiply(Vr,1e3)),math.multiply(Vr,1e3)),100);
  // console.log(Rv);

  let a2=math.add(math.multiply(poteR,1e+6),Pe);
  // console.log(a2);

  let n=math.multiply(math.divide(math.multiply(poteR,1e+6),a2),100);
  // console.log(n);

  let angIr=math.multiply(ang,math.divide(180,math.pi));
  // console.log(angIr);
  Vs+="";
  Is+="";
  var resVs = Vs.split("+"),resIs = Is.split("+");
  var realVs=resVs[0],realIs=resIs[0];
  var imgVs=resVs[1],imgIs=resIs[1];
  imgVs = imgVs.substring(0, imgVs.length-1);
  imgIs = imgIs.substring(0, imgIs.length-1);
  // document.getElementById("demo").innerHTML = imgIs+"  "+realIs;
  let angVs=math.multiply(math.atan2(imgVs,realVs),math.divide(180,math.pi));
  // console.log("Vs:"+Vs);
  // console.log("atan2Vs: "+angVs);
  let angIs=math.multiply(math.atan2(imgIs,realIs),math.divide(180,math.pi));
  // console.log("atan2Is: "+angIs);


  // magnitud
  let IR=math.abs(Ir);
  // console.log(IR);
  let VS=absVs;
  // console.log(VS);
  let IS=Isa;
  // console.log(IS);
  this.Vr = Vr;
  this.IR = IR;
  this.VS = VS;
  this.IS = IS;
  this.angIr =math.im(angIr);//angIr;
  this.angVs = angVs;
  this.angIs = angIs;
  this.Pe = Pe;
  this.n = n;
  this.Rv = Rv;
  // console.log("Vr: "+this.Vr);
  // console.log("IR: "+this.IR);
  // console.log("VS: "+this.VS);
  // console.log("IS: "+this.IS);
  // console.log("angIr: "+this.angIr);
  // console.log("angVs: "+this.angVs);
  // console.log("angIs: "+this.angIs);
  // console.log("Pe: "+this.Pe);
  // console.log("n: "+this.n);
  // console.log("Rv: "+this.Rv);
  this.doc = new jsPDF('landscape');
  }
  crearPDF(){

    this.doc.text(20, 20, 'Vr: '+this.Vr+'\nIR: '+this.IR+'\nVS: '+this.VS+'\nIS: '+this.IS
    +'\nangIr: '+this.angIr+'\nangVs: '+this.angVs+'\nangIs: '+this.angIs+'\nPe: '+this.Pe+'\nn: '+this.n+'\nRv: '+this.Rv);
    this.doc.save('Test.pdf');
  }
}
