import { TestBed } from '@angular/core/testing';

import { ForditoGuard } from './fordito.guard';

describe('ForditoGuard', () => {
  let guard: ForditoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ForditoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
