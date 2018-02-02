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

  ngOnInit() {
    
  }

}
