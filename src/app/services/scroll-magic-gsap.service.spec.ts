import { TestBed } from '@angular/core/testing';

import { ScrollMagicGsapService } from './scroll-magic-gsap.service';

describe('ScrollMagicGsapService', () => {
  let service: ScrollMagicGsapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollMagicGsapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
