import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharPage } from '../char/char';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goCharPage() {
  this.navCtrl.setRoot(CharPage);
  }

}


