import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(public httpClient: HttpClient) { }
  public calculate(toughness, defensePoints, preMitigation) {
      return this.httpClient.get(`${environment.apiUrl}/calc?toughness=${toughness}&defensePoints=${defensePoints}&preMitigation=${preMitigation}`)
  }
}
