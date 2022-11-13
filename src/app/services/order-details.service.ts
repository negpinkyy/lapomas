import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails =[
  {
    id:1,
    foodName: "Fries",
    foodDetails: "pan fried",
    foodPrice: 200,
    foodImg: "/assets/images/chips2.jpg"
  },
  {
    id:2,
    foodName: "Tea",
    foodDetails: "pan fried we are the best",
    foodPrice: 50,
    foodImg: "/assets/images/ tea2.jpg"
  },
    {
    id:3,
    foodName: "burger6",
    foodDetails: "pan fried",
    foodPrice: 40 ,
    foodImg: "/assets/images/burger1.jpg"
  },
  {
    id:4,
    foodName: "cake",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "/assets/images/cake2.jpg"
  },
  
  ]

// second Carousel A

   foodDetails1 =[
    {
    id:1,
    foodName: "Chicken",
    foodDetails: "pan fried",
    foodPrice: 200,
    foodImg: "/assets/images/chiken6.jpg"
  },
  {
    id:2,
    foodName: "Drinks",
    foodDetails: "pan fried we are the best",
    foodPrice: 50,
    foodImg: "assets/images/drink2.jpg"
  },
    {
    id:3,
    foodName: "Food",
    foodDetails: "pan fried",
    foodPrice: 40 ,
    foodImg: "assets/images/food3.jpg"
  },
  {
    id:4,
    foodName: "Ice Cream",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/icecream.jpg"
  }, 
  
  ]
// second carousel B
  foodDetails2=[
        {
    id:1,
    foodName: "tea",
    foodDetails: "We are the best when it comes to Herbal Tea",
    foodPrice: 200,
    foodImg: "assets/images/ tea3.jpg"
  },

 {
    id:2,
    foodName: "Drink",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/drink3.jpg"
  },
   {
    id:3,
    foodName: "Icecream",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/icecream4.jpg"
  },
 {
    id:4,
    foodName:"Drink",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/drink1.jpg"
  },

  ]
// ssecond carousel second layer
  foodDetailsC=[
        {
    id:1,
    foodName: "chips",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/chips10.jpg"
  },

 {
    id:2,
    foodName: "food",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/food9.jpg"
  },
   {
    id:3,
    foodName: "pizza",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/pizza4.jpg"
  },
 {
    id:4,
    foodName: "Restaurant",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/cake4.jpg"
  },

  ]

// second potion A

 foodDetailsC1=[
        {
    id:1,
    foodName: "chips",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/chips6.jpg"
  },

 {
    id:2,
    foodName: "food",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/food6.jpg"
  },
   {
    id:3,
    foodName: "pizza",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/pizza6.jpg"
  },
 {
    id:4,
    foodName: "Chiken",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/chiken4.jpg"
  },

  ]
// third of the second carousel
   foodDetailsC2=[
        {
    id:1,
    foodName: "chips",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/chips4.jpg"
  },

 {
    id:2,
    foodName: "food",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/food4.jpg"
  },
   {
    id:3,
    foodName: "pizza",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/burger3.jpg"
  },
 {
    id:4,
    foodName: "Restaurant",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/food7.jpg"
  },

  ]
// the first last

   foodDetailsC2A=[
        {
    id:1,
    foodName: "Burger",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/burger4.jpg"
  },

 {
    id:2,
    foodName: "Cake",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/cake3.jpg"
  },
   {
    id:3,
    foodName: "Chicken4",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/chiken3.jpg"
  },
 {
    id:4,
    foodName: "Chips",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/chips7.jpg"
  },

  ]

  // second of the last

   foodDetailsC2B=[
        {
    id:1,
    foodName: "Drink",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/drink2.jpg"
  },

 {
    id:2,
    foodName: "Food",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/food7.jpg"
  },
   {
    id:3,
    foodName: "pizza",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/pizza9.jpg"
  },
 {
    id:4,
    foodName: "food",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/food1.jpg"
  },

  ]
  // last carousel


   foodDetailsC2C=[
        {
    id:1,
    foodName: "chips",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/chips5.jpg"
  },

 {
    id:2,
    foodName: "Cake",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/cake6 .jpg"
  },
   {
    id:3,
    foodName: "Burger",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/burger5.jpg"
  },
 {
    id:4,
    foodName: "Chips",
    foodDetails: "pan fried we are the best",
    foodPrice: 200,
    foodImg: "assets/images/chips1.jpg"
  },

  ]

  restaDatails = [
 {
    id:1,
    restaName: "Restaurant",
    restaDetails: "pan fried we are the best",
    restaPrice: 200,
    restaImg: "assets/images/resta1.jpg"
  },
   {
    id:2,
    restaName: "Restaurant",
    restaDetails: "pan fried we are the best",
    restaPrice: 200,
    restaImg: "assets/images/resta2.jpg"
  },
   {
    id:3,
    restaName: "Restaurant",
    restaDetails: "pan fried we are the best",
    restaPrice: 200,
    restaImg: "assets/images/resta3.jpg"
  },
   {
    id:4,
    restaName: "Restaurant",
    restaDetails: "pan fried we are the best",
    restaPrice: 200,
    restaImg: "assets/images/resta4.jpg"
  },
   {
    id:5,
    restaName: "Restaurant",
    restaDetails: "pan fried we are the best",
    restaPrice: 200,
    restaImg: "assets/images/resta5.jpg"
  },
   {
    id:6,
    restaName: "Restaurant",
    restaDetails: "pan fried we are the best",
    restaPrice: 200,
    restaImg: "assets/images/resta6.jpg"
  },
   {
    id:7,
    restaName: "Restaurant",
    restaDetails: "pan fried we are the best",
    restaPrice: 200,
    restaImg: "assets/images/resta7.jpg"
  },
  ]

}
