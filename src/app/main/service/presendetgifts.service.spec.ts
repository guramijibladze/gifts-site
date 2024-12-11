import { TestBed } from '@angular/core/testing';

import { PresendetgiftsService } from './presendetgifts.service';

describe('PresendetgiftsService', () => {
  let service: PresendetgiftsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresendetgiftsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
