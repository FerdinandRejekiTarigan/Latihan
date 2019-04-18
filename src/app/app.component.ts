import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { TambahPinjamanPage } from '../pages/tambah-pinjaman/tambah-pinjaman';
import { ProfilPage } from '../pages/profil/profil';
import { RiwayatPinjamanPage }  from '../pages/riwayat-pinjaman/riwayat-pinjaman';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;
  pages: Array<{
    title: String, component: any,
    icon: String;
  }>;



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      { title: 'Home', component: HomePage, icon:'home' },
      { title: 'Ajukan Pinjaman', component: TambahPinjamanPage, icon: 'logo-usd' },
      { title: 'Profil', component: ProfilPage, icon:'people' },
      { title: 'Riwayat Pinjaman', component: RiwayatPinjamanPage, icon: 'md-paper' }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page){
    // Reset the content nav to have just page
    // We wouldn't want the back button to show  in this scenario
    this.nav.setRoot(page.component);
  }

}

