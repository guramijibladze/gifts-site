import { Component, OnInit } from '@angular/core';
import { IMAGE_PATHS } from '../utils';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LoadingService } from '../../main/service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {
  loading$!:Observable<boolean>

  constructor(
    private loadingService:LoadingService
  ){}
  
  ngOnInit(): void {
    this.loading$ = this.loadingService.isLoading
  }

}
