import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly loggedInUserKey = 'loggedUser';
  private readonly forditasokSzamaKey = 'forditasokSzama';

  private _curentUser = new BehaviorSubject<string | undefined>(undefined);

  constructor() {

    const user = localStorage.getItem(this.loggedInUserKey);

    if (user) {
      this._curentUser.next(user);

    }

  }

  userReg(nev: string, email: string, telszam: string) {
    localStorage.setItem(this.loggedInUserKey, nev);

    this._curentUser.next(nev)
  }

  get curentUser() {
    return this._curentUser.asObservable();
  }


  userRegRemove() {
    localStorage.removeItem(this.loggedInUserKey)
    this._curentUser.next(undefined)
  }


  isUserReg() {
    return this._curentUser.getValue() !== undefined;
  }

  csinlahatUjabbForditast() {

    return (this.isUserReg()) || (this.forditasokSzama < 3)
  }


  get forditasokSzama() {
    var fszam = localStorage.getItem(this.forditasokSzamaKey);
    if (fszam === null) {
      fszam = '0';
    }
    return parseInt(fszam)
  }

  incForditasszam() {
    var fszam = this.forditasokSzama + 1;

    localStorage.setItem(this.forditasokSzamaKey, String(fszam));

  }

}
