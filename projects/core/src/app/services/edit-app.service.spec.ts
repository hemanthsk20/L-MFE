import { TestBed } from '@angular/core/testing';

import { EditAppService } from './edit-app.service';

describe('EditAppService', () => {
  let service: EditAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
