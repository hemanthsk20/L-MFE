import { TestBed } from '@angular/core/testing';

import { EditTextService } from './edit-text.service';

describe('EditTextService', () => {
  let service: EditTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
