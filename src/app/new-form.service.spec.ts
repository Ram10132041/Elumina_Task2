import { TestBed } from '@angular/core/testing';

import { NewFormService } from './new-form.service';

describe('NewFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewFormService = TestBed.get(NewFormService);
    expect(service).toBeTruthy();
  });
});
