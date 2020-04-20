import { TestBed } from '@angular/core/testing';

import { MachineStatesService } from './machine-states.service';

describe('MachineStatesService', () => {
  let service: MachineStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
