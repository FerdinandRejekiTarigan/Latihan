import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TambahPinjamanPage } from './tambah-pinjaman';

@NgModule({
  declarations: [
    TambahPinjamanPage,
  ],
  imports: [
    IonicPageModule.forChild(TambahPinjamanPage),
  ],
})
export class TambahPinjamanPageModule {}
