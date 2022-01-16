import { TestBed } from '@angular/core/testing';

import { ContinentApiService } from './continent-api.service';

describe('ContinentApiService', () => {
  let service: ContinentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContinentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
