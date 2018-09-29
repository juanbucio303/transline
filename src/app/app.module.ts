import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { File } from '@ionic-native/file';
import { SQLite } from '@ionic-native/sqlite';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from "../pages/menu/menu";
import { MenuAdminPage } from "../pages/menu-admin/menu-admin";

//Pages
import { UnConductorPage } from '../pages/un-conductor/un-conductor';
import { DosConductoresPage } from '../pages/dos-conductores/dos-conductores';
import { DosCircuitosPage } from '../pages/dos-circuitos/dos-circuitos';
import { MasDeDosConductoresPage } from '../pages/mas-de-dos-conductores/mas-de-dos-conductores';
import {InicioPage } from '../pages/inicio/inicio';
import { RegistroPage } from '../pages/registro/registro';
import {UsuariosPage} from '../pages/usuarios/usuarios';
import {ResistenciasPage} from '../pages/resistencias/resistencias';


//Providers Components
import { ProveedorProvider } from '../providers/proveedor/proveedor';
import { DatabaseProvider } from '../providers/database/database';

//Modales Pages
import { ResultadosPage } from "../pages/resultados/resultados";
import { ResdosconPage } from "../pages/resdoscon/resdoscon";
import { ResdoscircPage } from "../pages/resdoscirc/resdoscirc";
import { ResmasdosconPage } from "../pages/resmasdoscon/resmasdoscon";
import { PerdidasPage } from "../pages/perdidas/perdidas";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UnConductorPage,
    MenuPage,
    DosConductoresPage,
    DosCircuitosPage,
    MasDeDosConductoresPage,
    ResultadosPage,
    ResdosconPage,
    ResdoscircPage,
    ResmasdosconPage,
    InicioPage,
    RegistroPage,
    MenuAdminPage,
    UsuariosPage,
    ResistenciasPage,
    PerdidasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UnConductorPage,
    MenuPage,
    DosConductoresPage,
    DosCircuitosPage,
    MasDeDosConductoresPage,
    ResultadosPage,
    ResdosconPage,
    ResdoscircPage,
    ResmasdosconPage,
    InicioPage,
    RegistroPage,
    MenuAdminPage,
    UsuariosPage,
    ResistenciasPage,
    PerdidasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProveedorProvider,
    DatabaseProvider,
    File,
    SQLite
  ]
})
export class AppModule {}
