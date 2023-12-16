import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-grid-menu',
  templateUrl: './grid-menu.page.html',
  styleUrls: ['./grid-menu.page.scss'],
})
export class GridMenuPage {
  menuItems = [
    { 
      title: 'CODIFICADO',
      icon: 'book-sharp',
      imageSrc:'',
      page: 'codificado-trafico',
    },
    { 
      title: 'TRÁFICO',
      icon: 'car-sport-sharp',
      imageSrc:'',
      page: 'ordenanza-de-trafico',
    },
    { 
      title: 'INCÍVICA',
      icon: 'earth-sharp',
      imageSrc:'assets/images/codificado.png',
      page: '',
    },
    { 
      title: 'TERRAZAS',
      icon: 'restaurant',
      imageSrc:'',
      page: '',
    },
    { 
      title: 'V. AMBULANTE',
      icon: 'megaphone-sharp',
      imageSrc: '',
      page: '',
    },
    { 
      title: 'ANIMALES',
      icon: 'paw-sharp',
      imageSrc:'',
      page: '',
    },
    // Agrega más elementos de menú según tus necesidades
  ];

  topMenuItems: any[] = [];
  bottomMenuItems: any[] = [];

  constructor(private navCtrl: NavController) {
    this.menuItems.forEach((item, index) => {
      if (index < 3) {
        this.topMenuItems.push(item);
      } else {
        this.bottomMenuItems.push(item);
      }
    });
  }

  navigateTo(page: string) {
    this.navCtrl.navigateForward(page);
  }

  navigateToAboutUsPage() {
    this.navCtrl.navigateForward('/about-us');
  }
}
