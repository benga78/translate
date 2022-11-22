import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { nyelvekData } from '../model/nyelvekData';
import { ForditoService } from '../services/fordito.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-fordito',
  templateUrl: './fordito.component.html',
  styleUrls: ['./fordito.component.scss']
})
export class ForditoComponent implements OnInit {

  nyelvek: nyelvekData[] | undefined;
  forrasNyelv = 'AUTO';  
  celNyelv = 'hu';
  forrasSzoveg = "";
  celSzoveg = "";

  constructor(private forditoService: ForditoService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.forditoService.getNyelvek().subscribe(data => {
      this.nyelvek = data;
      this.nyelvek.push({ code: "AUTO", name: "Automatikus detektálás" })

    });

    //this.authService.resetForditasszam();
  }

  sleep(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async detektalas() {
    if (this.forrasNyelv === "AUTO") {
      this.forditoService.detektalas(this.forrasSzoveg).subscribe(m => { this.forrasNyelv = m[0].language});

      await this.sleep(100);
    }
  }

  async forditas() {

    if (!this.authService.csinlahatUjabbForditast()) {
      alert("Nem csinálhat új fordítást! Átirányítom a regisztrációra");

      this.router.navigateByUrl('registration');

    }
    else {

      await this.detektalas();

      this.forditoService.forditas(this.forrasSzoveg, this.forrasNyelv, this.celNyelv).subscribe(data => this.celSzoveg = data.translatedText)
      this.authService.incForditasszam();
    }

  }

}
