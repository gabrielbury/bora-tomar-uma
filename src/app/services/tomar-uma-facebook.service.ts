import { Injectable } from '@angular/core';
import { FacebookService } from 'ngx-facebook';
import { AuthService } from '../auth.service';

@Injectable()
export class TomarUmaFacebookService {

  constructor(private fb: FacebookService, private authService: AuthService) { }

  buscar(latitude : string, longitude: string, token: string, termo: string = 'bar'): Promise<any[]>{
    return this.fb.api("/search", "get", {type: "place", q: termo, center: latitude + "," + longitude, distance: 3000, fields: "name,checkins,picture,cover,description,hours,location", access_token: token})
      .then(response => {
        console.log(response);
        return Promise.resolve(response.data);
      })
  }

  usuario(id: number, token: string): Promise<any>{
    return this.fb.api("/"+id, 'get', {access_token: token})
      .then((response) => {
        return this.fb.api("/"+id+"/picture?type=square", "get", {})
          .then(foto => {
            console.log(foto);
            response.profile_pic = foto.data.url;
            return Promise.resolve(response);
          })
      })
  }

}
