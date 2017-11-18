import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  nombre: string = "Zaha Hadid";
  ocupacion: string = "architect";
  edad: number = 65;
  origen: string ="Bagdad,Irak";


    datos:any = {
      nombre: "Zaha Hadid",
      ocupacion: "architect",
      edad: 65,
      origen:"Bagdad, Irak"
    };


  constructor(public navCtrl: NavController) {

  }
}
