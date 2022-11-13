import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private services:OrderDetailsService) { }
  foodData:any;
  restaData:any;
  ngOnInit(): void {
    this.foodData = this.services.foodDetails;
    this.restaData = this.services. restaDatails;
  }

}
