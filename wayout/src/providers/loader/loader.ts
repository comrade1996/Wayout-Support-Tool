import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the LoaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaderProvider {
  loading;
  constructor(
    public loadingController: LoadingController
  ) {
    this.loading = this.loadingController.create({
      cssClass: 'my-custom-class',

      // message: 'Please wait...',
      duration: 0
    });
  }
  // This will show then autohide the loader
  async showHideAutoLoader() {

    await this.loading.present();
    // await this.loadingController.create({
    //   message: 'This Loader Will Auto Hide in 2 Seconds',
    //   duration: 2000
    // }).then((res) => {
    //   res.present();

    //   res.onDidDismiss().then((dis) => {
    //     console.log('Loading dismissed! after 2 Seconds', dis);
    //   });
    // });

  }

  // Show the loader for infinite time
  async showLoader() {

    await this.loading.present();

    // await this.loadingController.create({
    //   message: 'Please wait...',
    //   cssClass:'loader'
    // }).then((res) => {
    //   res.present();
    // });

  }

  // Hide the loader if already created otherwise return error
  async hideLoader() {

    await this.loading.dismiss();
    console.log('Loading dismissed with role:');

    //  await this.loadingController.dismiss().then((res) => {
    //     console.log('Loading dismissed!', res);
    //   }).catch((error) => {
    //     console.log('error', error);
    //   });

  }

}
