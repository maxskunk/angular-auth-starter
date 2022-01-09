import { TestBed } from '@angular/core/testing';

import { ZokyaZonksService } from './zokya-zonks.service';

describe('ZokyaZonksService', () => {
  let service: ZokyaZonksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZokyaZonksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
