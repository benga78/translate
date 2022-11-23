import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { nyelvekData } from '../model/nyelvekData';
import { ForditoService } from '../services/fordito.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-fordito',
  templateUrl: './fordito.component.html',
  styleUrls: ['./fordito.component.scss']
})
export class ForditoComponent implements OnInit {

  nyelvek: nyelvekData[] | undefined;
  forrasNyelv = 'AUTO';
  celNyelv = 'hu';

  celSzoveg = "";
  isLoading = false;
  form: FormGroup;

  constructor(private forditoService: ForditoService, private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {

    this.form = new FormGroup({
      forrasSzoveg: new FormControl('', Validators.required)

    });
  }

  ngOnInit(): void {
    this.forditoService.getNyelvek().subscribe(data => {
      this.nyelvek = data;
      this.nyelvek.push({ code: "AUTO", name: "Automatikus detektálás" })

    });

  }

  sleep(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async detektalas() {
    if (this.forrasNyelv === "AUTO") {
      this.forditoService.detektalas(this.form.value.forrasSzoveg).subscribe(m => { this.forrasNyelv = m[0].language });

      await this.sleep(300);
    }
  }

  async forditas() {

    if (!this.authService.csinlahatUjabbForditast()) {
      this.snackBar.open("Nem csinálhat új fordítást! Átirányítom a regisztrációra", "OK", { duration: 5000 })
      this.router.navigateByUrl('registration');

    }
    else {

      this.isLoading = true;

      await this.detektalas();

      this.forditoService.forditas(this.form.value.forrasSzoveg, this.forrasNyelv, this.celNyelv).
        pipe(finalize(() => this.isLoading = false)).
        subscribe(data => this.celSzoveg = data.translatedText)

      this.authService.incForditasszam();
    }

  }

}
