import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage } from 'ionic-angular';
import { DatahandlerProvider } from '../../providers/datahandler/datahandler';
import { LoaderProvider } from '../../providers/loader/loader';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  loginUrl='https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly fb: FormBuilder,
     private loader: LoaderProvider,
      private dataHandler: DatahandlerProvider) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.getRawValue());
      const loginData = this.loginForm.getRawValue();
      this.loader.showLoader();
      this.dataHandler.postData(this.loginUrl,loginData).subscribe((response)=>{
        console.log(response);
        this.loader.hideLoader();
      })
    } else {
      console.log('There is a problem with the form');
    }
  }

  // validatorPassword(fc: FormControl) {
  //   const value = fc.value as string;
  //   const isInvalid = 'password' === value.trim().toLowerCase();
  //   return isInvalid ? { passwordError: 'Password is not a strong password'} : null;
  // }
}
