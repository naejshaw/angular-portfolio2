import { TestBed } from '@angular/core/testing';

import { CardTestDataService } from './card-data.service';

describe('CardTestDataService', () => {
  let service: CardTestDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardTestDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
