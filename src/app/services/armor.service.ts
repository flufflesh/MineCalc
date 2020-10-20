import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Armor } from '../models/Armor';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ArmorService {

  constructor(public httpClient: HttpClient) { }
  public getArmor(): Observable<Armor> {
      return this.httpClient.get<Armor>(`${environment.apiUrl}/armorSets.json`);
  }
}
