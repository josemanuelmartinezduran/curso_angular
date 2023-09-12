import { TestBed } from '@angular/core/testing';

import { BulbasaurService } from './bulbasaur.service';

describe('BulbasaurService', () => {
  let service: BulbasaurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulbasaurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
