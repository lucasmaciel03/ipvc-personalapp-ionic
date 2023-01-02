import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  isChecked : boolean = false;

  isModalOpen = false;
  isModalOpen2 = false;
  isModalOpen3 = false;

  setOpen(isOpen: boolean){
    this.isModalOpen = isOpen;
  }

  setOpen2(isOpen: boolean){
    this.isModalOpen2 = isOpen;
  }

  setOpen3(isOpen: boolean){
    this.isModalOpen3 = isOpen;
  }
  
  async  ionViewWillEnter() {
    this.isChecked = (await Preferences.get({ key: 'darkmode' })).value === 'true';
  }

  async changeDarkMode() { 
    this.isChecked = !this.isChecked;
    await Preferences.set({ key: 'darkmode', value: this.isChecked ? 'true' : 'false' });
  }
}
