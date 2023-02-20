import { TestBed } from '@angular/core/testing';

import { CreateCmsNewsService } from './create-cms-news.service';

describe('CreateCmsNewsService', () => {
  let service: CreateCmsNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCmsNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
