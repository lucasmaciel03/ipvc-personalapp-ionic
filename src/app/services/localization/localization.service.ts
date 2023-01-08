import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  selected = '';
  constructor(private translate: TranslateService) {}

  async setInitialAppLanguage() {
    let userLanguage = await (
      await Preferences.get({ key: 'user-lang' })
    ).value;

    if (userLanguage === null) {
      userLanguage = 'pt';
    }

    await this.translate.setDefaultLang(userLanguage);
    await this.setLanguage(userLanguage);
  }
  async setLanguage(lng: string) {
    this.selected = lng;
    await this.translate.use(lng);
    await Preferences.set({ key: 'user-lang', value: lng });
  }
}
