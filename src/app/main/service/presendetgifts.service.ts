import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GIFTREGISTRATION_URL, SWAGGER_URL } from '../../shared/utils';
import { GiftedItemModel } from '../model';

@Injectable({
  providedIn: 'root'
})
export class PresendetgiftsService {

  private swaggerUrl = SWAGGER_URL
  private swaggergiftregistrationUrl = GIFTREGISTRATION_URL

  constructor(
    private http: HttpClient
  ) { }

  // public getcomputerRooms():Observable<any>{
  //   return this.http.get<any>('http://46.49.6.118:2040/api/Gifts/GetGiftedItems?Raodenoba=1')
  // }

  public giftRegistration(sendObject:any):Observable<GiftedItemModel[]>{
    return this.http.post<any>(`${this.swaggergiftregistrationUrl}`, sendObject)
  }

  public getGiftedItems(sendObject:any):Observable<GiftedItemModel[]>{
    return this.http.get<any>(`${this.swaggerUrl}GetGiftedItems?Raodenoba=${sendObject.Raodenoba}&isActive=${sendObject.isActive}`)
  }
}
