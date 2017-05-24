import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the RestService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RestService {
  data: any;
  apiUrl = 'https://jsonplaceholder.typicode.com';
  baseUrl = 'http://0.0.0.0:8080/api/v1';
  constructor(public http: Http) {
    console.log('Hello RestService Provider');
  }

  getUsers() {
  if (this.data) {
    return Promise.resolve(this.data);
  }

  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/users')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  });
}

  loginUser(email,password) {
  if (this.data) {
    return Promise.resolve(this.data);
  }

  return new Promise(resolve => {
    // this.http.get(this.apiUrl+'/login')
    //   .map(res => res.json())
    //   .subscribe(data => {
    //     this.data = data;
    //     resolve(this.data);
    //   });

    let body = new FormData();
    body.append('email', email);
      body.append('password',password);
 		let headers = new Headers({
			'Content-Type': 'multipart/form-data'
		});
		let options = new RequestOptions({
			headers: headers
		});

    var creds = {email : email ,password : password};
      this.http
    .post(this.baseUrl + '/login', JSON.stringify(creds), options)
    .map(res => res.json())
    .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  });
}

  getStores(accessToken) {
    console.log("in getStores : " + accessToken );
    let headers = new Headers({
      'access_token': accessToken
		});
  return new Promise(resolve => {
    this.http.get(this.baseUrl + '/stores',{headers})
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  });
}

  getDeals(accessToken) {
    console.log("in getDeals : " + accessToken );
    let headers = new Headers({
      'access_token': accessToken
		});
  return new Promise(resolve => {
    this.http.get(this.baseUrl + '/deals',{headers})
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  });
}

getProfileData(accessToken){
      console.log("in getProfileData : " + accessToken );
    let headers = new Headers({
      'access_token': accessToken
		});
  return new Promise(resolve => {
    this.http.get(this.baseUrl + '/profile',{headers})
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  });
}
}
