import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  form: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.form.valid) {
        console.log(this.form.getRawValue());
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
