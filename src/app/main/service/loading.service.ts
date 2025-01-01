import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _loading: Subject<boolean> = new Subject();
  isLoading:Observable<boolean> = this._loading.asObservable()

  constructor() { }

  loaderStart(){
    this._loading.next(true)
  }

  loaderStop(){
    this._loading.next(false)
  }
}
