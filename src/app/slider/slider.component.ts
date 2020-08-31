import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  numbers:any=[];
  foods:any[]=[
    { id:1,name:"pizza"},
    { id:2,name:"biryani"}
  ]

  cars:any[]=[
    { id:1,name:"BMW"},
    { id:2,name:"TATA"}
  ]

  slider={
    min:1,
    max:20,
    defaultvalue:5,
    step:1
  }

  ngOnInit(){
    this.display(this.slider.defaultvalue);
  }
  
  display(n){
    this.numbers=[];
    console.log(n)
   for(let i=1;i<=n;i++){
     this.numbers.push(i);
    console.log(i)
   }
  }

}
