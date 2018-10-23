import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, ModalController } from 'ionic-angular';
import { AreaClientesPage } from './../area-clientes/area-clientes';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  private user = {
    email:'',
    pass:''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public autFire:AngularFireAuth, public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  presentModal() {
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
  cierreModal()
  {
    this.viewCtrl.dismiss();
  }
  acceso()
  {
    this.autFire.auth.signInWithEmailAndPassword(
      this.user.email, 
      this.user.pass).then(() => 
      {
        console.log("usuario");
        // this.navCtrl.push(PrivadoPage);
        this.navCtrl.setRoot(AreaClientesPage);
      }).catch(error =>
        alert(error)
        );
    
  }
  registro()
  {
    this.autFire.auth.createUserWithEmailAndPassword(
      this.user.email, 
      this.user.pass).then(() => 
      {
        alert("Usuario registrado correctamente");
        // this.navCtrl.push(PrivadoPage);
      }).catch(error =>
        alert(error)
        );
    
  }
}
