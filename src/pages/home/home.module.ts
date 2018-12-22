import { ContatoPageModule } from "./../contato/contato.module";
import { SobrePageModule } from "./../sobre/sobre.module";
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SobrePageModule,
    ContatoPageModule
  ],
})
export class HomePageModule {}
