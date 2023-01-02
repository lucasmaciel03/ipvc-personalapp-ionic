import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
