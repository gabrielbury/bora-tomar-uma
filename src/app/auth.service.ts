import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(private fb: FacebookService) {
    let initParams: InitParams = {
      appId: '381861962280452',
      xfbml: true,
      version: 'v2.12'
    };
     
    this.fb.init(initParams);
  }

  login(): Promise<LoginResponse> {
    return this.fb.login()
    .then((response: LoginResponse) => {
      localStorage.setItem('token', response.authResponse.accessToken);
      return response;
    })
  }

  getToken(): Promise<string> {
    if(localStorage.getItem('token') != null) {
      return Promise.resolve(localStorage.getItem('token'));
    }else {
      this.login().then((response: LoginResponse) => {
        return Promise.resolve(localStorage.getItem('token'));
      })
    }
  }

  clearToken() {
    localStorage.removeItem('token');
  }
}
