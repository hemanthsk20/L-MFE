import { TestBed } from '@angular/core/testing';

import { GetCmsService } from './get-cms.service';

describe('GetCmsService', () => {
  let service: GetCmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
