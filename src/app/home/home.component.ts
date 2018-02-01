import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TomarUmaFacebookService } from '../services/tomar-uma-facebook.service';
import { LoginResponse } from 'ngx-facebook';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accessToken: string = "";

  myCurrentPosition: any = {}

  locais = [];

  constructor(private authService: AuthService, private tomarUmaService: TomarUmaFacebookService) {

    navigator.geolocation.getCurrentPosition(pos => {
      this.setPosition(pos);
      this.setUp();
    });
  }

  setUp() {
    this.authService.getToken()
      .then(token => {
        this.accessToken = token;
        this.searchPlace();
      })
      .catch((error: any) => console.error(error));
  }

  searchPlace() {
    this.tomarUmaService.buscar(this.myCurrentPosition.latitude, this.myCurrentPosition.longitude, this.accessToken)
      .then(dados => {
        this.locais = dados;
      })
  }

  setPosition(position){
    this.myCurrentPosition.latitude = position.coords.latitude;
    this.myCurrentPosition.longitude = position.coords.longitude;
  }

  ngOnInit() {
    
  }

}
