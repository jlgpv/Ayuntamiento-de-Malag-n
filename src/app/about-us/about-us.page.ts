import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage {

  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }

}
