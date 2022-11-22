import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-fejlec',
  templateUrl: './fejlec.component.html',
  styleUrls: ['./fejlec.component.scss']
})
export class FejlecComponent implements OnInit {

  constructor(private authService: AuthService) { }

  loginNev: string = "";

  ngOnInit(): void {
    this.authService.curentUser.subscribe(user => { user ? this.loginNev = user : this.loginNev = "Nem regisztrált" })
  }

  deReg() {
    this.authService.userRegRemove();
  }

  regisztralt() {
    let ret = false;
    this.authService.curentUser.subscribe(user => { user ? ret = true : ret = false; })

    return ret;

  }


}
