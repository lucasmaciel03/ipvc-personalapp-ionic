import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isChecked : boolean = false;

  constructor(private router : Router ) {}


  async ionViewWillEnter() {
    this.isChecked = (await Preferences.get({ key: 'darkmode' })).value === 'true';
  }

  async changeDarkMode() { 
    this.isChecked = !this.isChecked;
    await Preferences.set({ key: 'darkmode', value: this.isChecked ? 'true' : 'false' });

    if (this.isChecked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.removeAttribute('color-theme');
    }
  }
  
  async tab1() {
    await this.router.navigate(['/tabs/tab1']), { replaceUrl: true };
  }

}
