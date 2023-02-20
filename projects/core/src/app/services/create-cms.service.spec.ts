import { TestBed } from '@angular/core/testing';

import { CreateCmsService } from './create-cms.service';

describe('CreateCmsService', () => {
  let service: CreateCmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
