import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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
  
}
