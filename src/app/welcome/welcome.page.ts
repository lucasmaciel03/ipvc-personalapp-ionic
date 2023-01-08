import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from '@ionic/angular';
import { LocalizationService } from '../services/localization/localization.service';
import { Input } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  // @Input() isChecked : boolean; 

  constructor(
    public navCtrl: NavController,
    private translateService: TranslateService,
    private toastController: ToastController,
    private LocalizationService: LocalizationService,
    private loadingCtrl: LoadingController
    ) { }

    ngOnInit() {
    }
    async loadingSpinner() {
      const loading = await this.loadingCtrl.create({
        spinner: 'crescent',
        mode: 'ios',
      });
      await loading.present();
      setTimeout(() => {
        loading.dismiss();
      }, 1000);
    }

  goToTab1() {
    this.navCtrl.navigateRoot('tabs');
  }

  async changeLanguage(language: string) {
    await Preferences.set({ key: 'user-lang', value: language });
    this.loadingSpinner();
    setTimeout(() => {
      this.translateService.use(language);
      this.showToast(language);
    }, 1000);
    this.goToTab1();
  }

  async showToast(lng: string) {
    if (lng == 'pt') {
      const toast = await this.toastController.create({
        message: this.translateService.instant('Aplicação iniciada em Português'),
        duration: 2000,
        position: 'top',
      });
      await toast.present();
    } else if (lng == 'en') {
      const toast = await this.toastController.create({
        message: this.translateService.instant('Application started in English'),
        duration: 2000,
        position: 'top',
      });
      await toast.present();
    }
  }



}
