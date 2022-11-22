import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  nev="";
  email="";
  telszam="";

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  regisztracio() {
    
    this.authService.userReg(this.nev, this.email, this.telszam);
    this.router.navigateByUrl('fordito');

  }

  

}
