import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//import { RiwayatPinjamanPage } from '../riwayat-pinjaman/riwayat-pinjaman';
//import { HomePage } from '../home/home';
const KEY_DATA_PROFIL = "dataProfil";

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
      public listProfil: any;
      noKtp: any = null;
      namalengkap: any = null;
      nohp: any = null;
      email: any = null;
      alamat: any = null;



  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage) {
       // mengatur key value 
       this.storage.set('name', 'noname');

       //mengambil key value
       this.storage.get('name').then((val) => {
         console.log('Your name is', val);
       });
      this.ambilDataProfil();
  }

  ambilDataProfil(){
    this.storage.get(KEY_DATA_PROFIL).then((data) => {
      if (data != null){
        this.listProfil = JSON.parse(data);
        console.log(this.listProfil);
      }else{
        this.listProfil = [];
        console.log('empty');
      }
    })
  }

  simpanDataProfil() {
    var tempData = {
      noKtp: this.noKtp,
      namalengkap: this.namalengkap,
      nohp: this.nohp,
      email: this.email,
      alamat: this.alamat

    }

    this.listProfil.push(tempData);
    this.storage.set(KEY_DATA_PROFIL, JSON.stringify(this.listProfil));
    this.navCtrl.setRoot(ProfilPage);
  }

  hapusDataProfil(item) {
    var temp = this.listProfil.indexOf(item);
    this.listProfil.splice(temp, 1);
    this.storage.set(KEY_DATA_PROFIL, JSON.stringify(this.listProfil));
  }

  hapusSemuaDataProfil() {
    this.storage.remove(KEY_DATA_PROFIL);
    this.listProfil = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  

}


