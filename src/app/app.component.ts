import { Component } from '@angular/core';
import { WelcomePage } from './welcome/welcome.page';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent {
  constructor(public navCtrl: NavController) {
    this.navCtrl.navigateRoot('/tabs/tab5');
  }

}
