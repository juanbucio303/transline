import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the ProveedorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveedorProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProveedorProvider Provider');
  }
  apiUrl='http://192.168.1.89/api/';
  getDatos() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'clientes/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getAllResisstencias() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'clientes/all/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  addResistencia(datos) {
  let options={headers: { 'Content-Type':'application/json'}};
  return new Promise(resolve =>{
    this.http.post(this.apiUrl+"clientes/agregar",JSON.stringify(datos),options).
    subscribe(data => {
      resolve(data);
    },err =>{
        console.log(err);
    });
  });
}
updateRes(dato){
  // let dat:any=dato;
  return new Promise(resolve => {
    this.http.put(this.apiUrl+'clientes/resistencias/actualizar/',dato)
    .subscribe(
      data => {
        resolve(data);
      },
      err => {
        console.log(err);
      }
    );
  });
}
borrar(){
  let id:any=111;
  // return new Promise(resolve =>{
  //   this.http.post(this.apiUrl+"clientes/borrar/",id)});
  return new Promise(resolve =>{
    this.http.delete(this.apiUrl+"clientes/borrar",id).
    subscribe(data => {
      resolve(data);
    },err =>{
        console.log(err);
    });
  });
}
//-----------------------------------------------USUARIOS--------------------------------------------------//
addUser(datos) {
let options={headers: { 'Content-Type':'application/json'}};
return new Promise(resolve =>{
  this.http.post(this.apiUrl+"clientes/usuario/agregar",JSON.stringify(datos),options).
  subscribe(data => {
    resolve(data);
  },err =>{
      console.log(err);
  });
});
}

getAutentificar(datos) {
  let url:any='clientes/veri/';
  let dato:any=datos;
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'clientes/veri/'+datos).
    subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

getAllUser(){
  // let dat:any=dato;
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'usuarios/').
    subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}
getUserName(dato){
  let dat:any=dato;
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'clientes/name/'+dat).
    subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}
updateUser(dato){
  // let dat:any=dato;
  return new Promise(resolve => {
    this.http.put(this.apiUrl+'clientes/usuario/actualizar/',dato)
    .subscribe(
      data => {
        resolve(data);
      },
      err => {
        console.log(err);
      }
    );
  });
}
  // obtenerdatos(){
  //     return  this.http.get(apiUrl);
  // }
}
