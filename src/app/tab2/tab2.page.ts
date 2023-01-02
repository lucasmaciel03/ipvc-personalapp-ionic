import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isChecked : boolean = false;

  constructor() {}


  async ionViewWillEnter() {
    this.isChecked = (await Preferences.get({ key: 'darkmode' })).value === 'true';
  }


  async changeDarkMode() { 
    this.isChecked = !this.isChecked;
    await Preferences.set({ key: 'darkmode', value: this.isChecked ? 'true' : 'false' });
  }

}
