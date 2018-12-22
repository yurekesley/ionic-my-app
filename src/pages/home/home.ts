import { ContatoPage } from "./../contato/contato";
import { SobrePage } from "./../sobre/sobre";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonViewDidLoad } from '../../app/ion-life-cycle/ion-view-did-load';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements IonViewDidLoad{

  public sobre = SobrePage;
  public contato = ContatoPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
