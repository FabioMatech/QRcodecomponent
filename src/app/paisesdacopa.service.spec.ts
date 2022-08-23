import { TestBed } from '@angular/core/testing';

import { PaisesdacopaService } from './paisesdacopa.service';

describe('PaisesdacopaService', () => {
  let service: PaisesdacopaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisesdacopaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
