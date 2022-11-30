import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, tap, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { detectResult } from '../model/detectResult';
import { forditasResult } from '../model/forditasResult';
import { nyelvekData } from '../model/nyelvekData';

@Injectable({
  providedIn: 'root'
})
export class ForditoService {


  constructor(private http: HttpClient) { }

  getNyelvek(): Observable<nyelvekData[]> {
    
    return this.http.get<nyelvekData[]>(environment.forditoNyelvekUrl)

  }

  forditas(szoveg: string, sourceNyelv: string, targetNyelv: string): Observable<forditasResult> {

    var formData = new FormData();
    formData.append("q", szoveg);
    formData.append("source", sourceNyelv);
    formData.append("target", targetNyelv);
    formData.append("format", "text");

    return this.http.post<forditasResult>(environment.forditoUrl, formData);

  }

  detektalas(szoveg: string):Observable<detectResult[]> {

    var formData = new FormData();
    formData.append("q", szoveg);

    return this.http.post<detectResult[]>(environment.forditoUrlDetect, formData);


  }

}
