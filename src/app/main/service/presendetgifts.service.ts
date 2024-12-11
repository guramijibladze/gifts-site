import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresendetgiftsService {

  constructor(
    private http: HttpClient
  ) { }

  public getcomputerRooms():Observable<any>{
    return this.http.get<any>('http://46.49.6.118:2040/api/Gifts/GetGiftedItems?Raodenoba=1')
  }
}
