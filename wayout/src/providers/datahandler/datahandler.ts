import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DatahandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatahandlerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DatahandlerProvider Provider');
  }

  getData(url):Observable<any> {
   return this.http.get(url);
  }
  postData(url, data):Observable<any>  {
   return this.http.post(url, data);
  }

  postFile(url, data):Observable<any>  {
    let form = new FormData;
    form.append('fileToUpload', data);

    return this.http.post(url, form);
   }

}
