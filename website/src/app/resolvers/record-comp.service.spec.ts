import { TestBed } from '@angular/core/testing';

import { RecordCompService } from './record-comp.service';

describe('RecordCompService', () => {
  let service: RecordCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
