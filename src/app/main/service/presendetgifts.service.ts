import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, finalize, Observable } from 'rxjs';
import { GIFTREGISTRATION_URL, SWAGGER_URL } from '../../shared/utils';
import { GiftedItemModel } from '../model';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class PresendetgiftsService {

  private swaggerUrl = SWAGGER_URL
  private swaggergiftregistrationUrl = GIFTREGISTRATION_URL

  constructor(
    private http: HttpClient,
    private loadingService:LoadingService
  ) { }


  public giftRegistration(sendObject:any):Observable<GiftedItemModel[]>{
    
    this.loadingService.loaderStart()
    
    return this.http.post<any>(`${this.swaggergiftregistrationUrl}`, sendObject)
            .pipe(
              delay(2500),
              finalize(() => this.loadingService.loaderStop())
            )
  }

  public getGiftedItems(sendObject:any):Observable<GiftedItemModel[]>{

    this.loadingService.loaderStart()

    return this.http.get<any>(`${this.swaggerUrl}GetGiftedItems?Raodenoba=${sendObject.Raodenoba}&isActive=${sendObject.isActive}`)
            .pipe(
              delay(1500),
              finalize(() => this.loadingService.loaderStop())
            )
  }
}
