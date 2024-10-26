import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardChildGuard } from './guard-child.guard';

describe('guardChildGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
