import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';



@Component({
  selector: 'app-menuorder',
  templateUrl: './menuorder.component.html',
  styleUrls: ['./menuorder.component.css']
})
export class MenuorderComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderDetailsService) { }
getMenuId:any;
menuData:any;
getMenuId1:any;
menuData1:any;
getMenuId2:any;
menuData2:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getmenu');
    if(this.getMenuId){
       this.menuData = this.service.foodDetails.filter((value) =>{
        return value.id == this.getMenuId; 
       });
      

      //  this.getMenuId1= this.param.snapshot.paramMap.get('id');
      //  if (this.getMenuId1){
      //      this.menuData1 =  this.service.foodDetails1.filter((value)=>{
      //   return value.id === this.getMenuId1; 
      //   });
      

      //  this.getMenuId2= this.param.snapshot.paramMap.get('id');
      //    if(this.getMenuId){
      //      this.menuData2 =  this.service.foodDetails2.filter((value)=>{
      //   return value.id === this.getMenuId2; 
      //   });
    //   }

    // }
  }
    
  }

}
