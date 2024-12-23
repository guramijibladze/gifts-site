import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SWAGGER_URL } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class PresendetgiftsService {

  private swaggerUrl = SWAGGER_URL

  constructor(
    private http: HttpClient
  ) { }

  // public getcomputerRooms():Observable<any>{
  //   return this.http.get<any>('http://46.49.6.118:2040/api/Gifts/GetGiftedItems?Raodenoba=1')
  // }

  public getGiftedItems(sendObject:any):Observable<any>{
    return this.http.get<any>(`${this.swaggerUrl}GetGiftedItems?Raodenoba=${sendObject.Raodenoba}&isActive=${sendObject.isActive}`)
  }
}
