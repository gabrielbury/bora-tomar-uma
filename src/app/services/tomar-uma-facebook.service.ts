import { Injectable } from '@angular/core';
import { FacebookService } from 'ngx-facebook';

@Injectable()
export class TomarUmaFacebookService {

  constructor(private fb: FacebookService) { }

  buscar(latitude : string, longitude: string, token: string): Promise<any>{
    return this.fb.api("/search", "get", {type: "place", q:"cerveja", center: latitude + "," + longitude, distance: 1000, fields: "name,checkins,picture", access_token: token})
      .then(response => {
        return Promise.resolve(response.data);
      })
  }

}
