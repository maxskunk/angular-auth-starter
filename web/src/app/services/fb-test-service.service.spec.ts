import { TestBed } from '@angular/core/testing';

import { FbTestServiceService } from './fb-test-service.service';

describe('FbTestServiceService', () => {
  let service: FbTestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbTestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
