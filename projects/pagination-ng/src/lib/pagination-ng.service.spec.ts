import { TestBed } from '@angular/core/testing';

import { PaginationNgService } from './pagination-ng.service';

describe('PaginationNgService', () => {
  let service: PaginationNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
