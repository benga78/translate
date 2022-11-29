import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  form: FormGroup;
  jogNyilatkozat=false;

  constructor(private authService: AuthService, private router: Router) {
    this.form = new FormGroup({
      nev: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telszam: new FormControl('', Validators.required),
      jogNyilatkozat : new FormControl (false,Validators.requiredTrue)
    }
    )
  }

  ngOnInit(): void {
  }

  get f() { return this.form.controls; }

  regisztracio() {

    this.authService.userReg(this.form.value.nev, this.form.value.email, this.form.value.telszam);
    this.router.navigateByUrl('fordito');

  }



}
