import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  handlerMessage = '';
  roleMessage = '';
  isChecked : boolean = false;


  constructor(
    private alertController: AlertController
  ) {}

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
  
  
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Jogo do Galo',
        subHeader: 'Este jogo foi desenvolvido por mim, Lucas Maciel, e foi desenvolvido no âmbito de melhorar as minhas qualidades nas tecnologias de HTML, CSS e JavaScript',
        buttons: [
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              this.handlerMessage = 'Alert confirmed';
            },
          },
        ],
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      this.roleMessage = `Dismissed with role: ${role}`;
    }

    async presentAlert2() {
      const alert2 = await this.alertController.create({
        header: 'Video Club',
        subHeader: 'Este projeto foi desenvolvido no âmbito da discplina de Aplicações Web, com o objeto de construir uma plataforma para aluguer de filmes.',
        buttons: [
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              this.handlerMessage = 'Alert confirmed';
            },
          },
        ],
      });
  
      await alert2.present();
  
      const { role } = await alert2.onDidDismiss();
      this.roleMessage = `Dismissed with role: ${role}`;
    }
    async presentAlert3() {
      const alert3 = await this.alertController.create({
        header: 'Management Company - PAP',
        subHeader: 'Este foi o projeto final do meu curso profissional Técnico Informática de Gestão, que tem como principal objetivo fazer gestão dos balanços da empresa, e apresentar possíveis soluções para melhorias da empresa.',
        buttons: [
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              this.handlerMessage = 'Alert confirmed';
            },
          },
        ],
      });
  
      await alert3.present();
  
      const { role } = await alert3.onDidDismiss();
      this.roleMessage = `Dismissed with role: ${role}`;
    }

}
