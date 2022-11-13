import { Component, OnInit } from '@angular/core';
import { RestaurantordersService } from 'src/app/booking/restaurantorders.service';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private booking:RestaurantordersService) { }
restaData: any;
  ngOnInit(): void {

 this.restaData=this.booking.restaurant;
  }

// url: string = "/assets/images/ tea4.jpg";
//     imageChange(event: any){
//         this.url = event.target.src;
//     }
//     try: string = "/assets/images/ tea3.jpg";
//     tryChange(events: any){
//         this.url = events.target.src;
//     }
    
// // console.log(event.target.src)


}


