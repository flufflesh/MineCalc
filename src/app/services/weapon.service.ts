import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weapon } from '../models/Weapon'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  constructor(public httpClient: HttpClient) { }
  public getWeapons(): Observable<Weapon> {
      return this.httpClient.get<Weapon>(`${environment.apiUrl}/weapons.json`);
  }
}
