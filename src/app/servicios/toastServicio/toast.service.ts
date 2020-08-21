import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController

  ) { }
  

  async toast(message: string, duration: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

  async toastPersonalizado(message: string, duration: number, classs: string, animated?: boolean, positiont?: 'top' | 'bottom' | 'middle') {
    try {
      const elmt = await this.toastController.getTop();
      if (elmt) {
        elmt.dismiss();
      }
    } catch (error) { }
    const toastP = await this.toastController.create({
      message: message,
      duration: duration,
      cssClass: classs,
      animated: animated,
      position: positiont

    });
    toastP.present();
  }
}
