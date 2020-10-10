import { LoaderProvider } from './../../providers/loader/loader';
import { DatahandlerProvider } from './../../providers/datahandler/datahandler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  fileToUpload: File = null;
  activatedForm = 'endpoint'
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  postUrl = 'http://192.168.8.102:3000/api/entities/3/upload';

  entites =  [
    { "name"  : "java ", "id" : 1 },
    { "name"  : "python in Depth", "id" : 2 },
    { "name"  : "C++ in Depth", "id" : 3 }
  ]
  segmentChanged(ev: any) {
    console.log('Segment changed', ev.value);
    this.activatedForm = ev.value;
  }

  formByEndpoint: FormGroup;
  formByFile: FormGroup;
  constructor(private readonly fb: FormBuilder,private loader:LoaderProvider, private dataHandler: DatahandlerProvider) {
    this.formByEndpoint = this.fb.group({
      url: [, [Validators.required, Validators.pattern(this.reg)]],
      entityId:['']
    });
    this.formByFile = this.fb.group({
      file: [null, [Validators.required]],
      entityId:['']
    });
    this.loader.showLoader();
    this.loader.hideLoader();
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}
uploadFileToActivity() {
  console.log(this.fileToUpload.type);

  if(this.fileToUpload.type){
  this.dataHandler.postFile(this.postUrl,this.fileToUpload).subscribe(data => {
    // do something, if upload success
    console.log(data);
    }, error => {
      console.log(error);
    });}
    else{
      alert('not excel');
    }
}

submitByEndpointForm() {
  console.log('post data232');

  if (this.formByEndpoint.valid) {

    this.uploadFileToActivity();
    console.log(this.formByEndpoint.getRawValue());

        this.dataHandler.postData(this.postUrl, 1).subscribe((data) => {
          console.log('post data', data);
        })

  } else {
    console.log('There is a problem with the form');
  }
}

submitByFileForm() {
  console.log(this.formByFile.getRawValue());
  this.uploadFileToActivity();
  if (this.formByFile.valid) {
    this.uploadFileToActivity();
  } else {
    console.log('There is a problem with the form');
  }
}

}
