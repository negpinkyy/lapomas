import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantpagesComponent } from './restaurantpages.component';

describe('RestaurantpagesComponent', () => {
  let component: RestaurantpagesComponent;
  let fixture: ComponentFixture<RestaurantpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantpagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
