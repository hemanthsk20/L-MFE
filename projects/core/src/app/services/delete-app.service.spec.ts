import { TestBed } from '@angular/core/testing';

import { DeleteAppService } from './delete-app.service';

describe('DeleteAppService', () => {
  let service: DeleteAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
