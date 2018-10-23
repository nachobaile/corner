import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { ModalPage } from "../modal/modal";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private user = {
    email:'',
    pass:''
  }

  constructor(public navCtrl: NavController, 
    public modalCtrl: ModalController
    ) {

  }
contact(){
  this.navCtrl.push(ContactPage);
}

presentModal() {
  const modal = this.modalCtrl.create(ModalPage);
  modal.present();
}


}
