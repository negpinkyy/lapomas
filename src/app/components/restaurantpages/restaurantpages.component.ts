import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantordersService } from 'src/app/booking/restaurantorders.service';


@Component({
  selector: 'app-restaurantpages',
  templateUrl: './restaurantpages.component.html',
  styleUrls: ['./restaurantpages.component.css']
})
export class RestaurantpagesComponent implements OnInit {

  constructor(private param:ActivatedRoute, private booking:RestaurantordersService) { }
 getMenuId: any;
  menuData: any;

  ngOnInit(): void {
this.getMenuId=this.param.snapshot.paramMap.get('id');
console.log(this.getMenuId,'getmenu');
if(this.getMenuId){
  this.menuData = this.booking.restaurant.filter((value) =>{
    return value.id==this.getMenuId;
  })
}

  }

}
