import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LocalizationService } from './services/localization/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent {
  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private localizationService: LocalizationService) {
      this.navCtrl.navigateRoot('tabs/tab1');
  }

  async ngOnInit() {
    await this.initializeApp();
  }
  async initializeApp() {
    await this.platform.ready();
    await this.localizationService.setInitialAppLanguage();
  }
}
