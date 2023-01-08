import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
import { LocalizationService } from '../services/localization/localization.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  constructor(
    public navCtrl: NavController,
    private translateService: TranslateService,
    private toastController: ToastController,
    private LocalizationService: LocalizationService,
    ) { }

  goToTab1() {
    this.navCtrl.navigateRoot('tabs');
  }

  ngOnInit() {
  }
  async changeLanguage(language: string) {
    await Preferences.set({ key: 'user-lang', value: language });
    await this.LocalizationService.setLanguage(language);
    await this.showToast();
    this.goToTab1();
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: this.translateService.instant('Language as been changed'),
      duration: 4000,
    });
    await toast.present();
  }

}
