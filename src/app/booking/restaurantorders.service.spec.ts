import { TestBed } from '@angular/core/testing';

import { RestaurantordersService } from './restaurantorders.service';

describe('RestaurantordersService', () => {
  let service: RestaurantordersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantordersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
