import { TestBed, inject } from '@angular/core/testing';

import { Data2Service } from './data2.service';

describe('Data2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Data2Service]
    });
  });

  it('should be created', inject([Data2Service], (service: Data2Service) => {
    expect(service).toBeTruthy();
  }));
});
