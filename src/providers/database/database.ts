import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  private db: SQLiteObject;
  private isOpen:boolean;
  constructor(public http: HttpClient, public storage:SQLite) {
    console.log('Hello DatabaseProvider Provider');
    if(!this.isOpen){
      this.storage.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject)=>{
        this.db=db;
        db.executeSql('CREATE TABLE IF NOT EXISTS resistencias (id_resistencia INTEGER PRIMARY KEY ,nombre TEXT,mm float ,ohm_km float,estado INTEGER)',[]);
        // this.create();
        this.isOpen = true;
      }).catch((error)=>{
        console.log(error);
      })
    }
  }
  create(){
    return new Promise ((resolve, reject)=>{
      let sql = "INSERT INTO resistencias (id_resistencia, nombre, mm, ohm_km, estado) VALUES (1, 'WREN', 3.99, 3.42, 1),(2, 'WARBLER', 4.5, 2.72, 1),(3, 'TURKEY', 5.04, 2.15, 1),(4, 'THRUSH', 5.67, 1.71, 1),(5, 'SWAN', 6.36, 1.35, 1),(6, 'SWALLOW', 7.14, 1.08, 1),(7, '** SPARROW', 8.01, 0.853, 1),(8, 'ROBIN', 9, 0.674, 1),(9, '** RAVEN', 10.11, 0.535, 1),(10, 'QUAIL', 11.34, 0.424, 1),(11, '** PIGEON', 12.75, 0.336, 1),(12, '** PENGUIN', 14.31, 0.267, 1),(13, '* OWL', 16.07, 0.208, 1),(14, 'WAXWING',15.46,0.213,1),(15,'** PARTRIDGE',16.3,0.214,1),(16,'OSTRICH',17.27, 0.19, 1)";
      this.db.executeSql(sql,[]).then((data)=>{
        resolve(data);
      },(error)=>{
        reject(error);
      });
    });

    //'INSERT INTO tasks(title, completed) VALUES(?,?)';
    // return this.db.executeSql(sql, [resistencias.nombre, resistencias.mm, resistencias.ohm_km]);
  }
  getAll(){
    return new Promise((resolve, reject)=>{
      this.db.executeSql("SELECT * FROM resistencias",[]).then((data)=>{
        let arrayRes = [];
        if(data.rows.length > 0){
          for (let i = 0; i < data.rows.length; i++) {
              arrayRes.push({
                nombre: data.rows.item(i).nombre,
                mm: data.rows.item(i).mm,
                ohm_km: data.rows.item(i).ohm_km
              });
          }
        }
        resolve(arrayRes);
      }, (error)=>{
        reject(error);
      })
    })
  }
}
