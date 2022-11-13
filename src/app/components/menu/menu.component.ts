import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderDetailsService ) { }
foodData:any;
foodData1:any;
foodData2:any;
foodDataC:any;
foodDataC1:any;
foodDataC2:any;
foodDataC2A:any;
foodDataC2B:any;
foodDataC2C:any
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
    this.foodData1 = this.service.foodDetails1;
    this.foodData2 = this.service.foodDetails2;
    this.foodDataC = this.service.foodDetailsC;
    this.foodDataC1 = this.service.foodDetailsC1;
    this.foodDataC2 = this.service.foodDetailsC2;
    this.foodDataC2A = this.service.foodDetailsC2A;
    this.foodDataC2B= this.service.foodDetailsC2B;
    this.foodDataC2C= this.service.foodDetailsC2C;
  
  }

}
