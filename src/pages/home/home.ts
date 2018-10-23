import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  skip(){
    this.navCtrl.push(AboutPage);
  }
  slides = [
    {
      title: "Laboral Corner, consultores a la altura de tus negocios",
      description: "Asesorando desde hace mas de 15 anos.",
      image: "../../assets/imgs/plantadinero.jpg",
    },
    {
      title: "Devolucion IRPF por maternidad o paternidad",
      description: "Laboral Corner gestiona tu devolucion sin molestias ni papeleos por tu parte.",
      image: "../../assets/imgs/embarazoelyella.jpg",
    },
    {
      title: "EL SUPREMO NOS DA LA RAZON sobre el AJD!",
      description: "Recupera lo que es tuyo con la ayuda de asesores con mas de 15 anos de experiencia. Solicita presupuesto sin compromiso ahora",
      image: "../../assets/imgs/dealcenital.jpg",
    }
  ];
}
