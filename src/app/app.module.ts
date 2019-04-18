import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IonicStorageModule } from '@ionic/storage';
import { TambahPinjamanPage } from '../pages/tambah-pinjaman/tambah-pinjaman';
import { ProfilPage } from '../pages/profil/profil';
import { RiwayatPinjamanPage } from '../pages/riwayat-pinjaman/riwayat-pinjaman';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TambahPinjamanPage,
    ProfilPage,
    RiwayatPinjamanPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TambahPinjamanPage,
    ProfilPage,
    RiwayatPinjamanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
