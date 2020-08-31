import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  liked=[];
places:any[]=[
  {
  id:1,
  title:"Korigad",
  subtitle:"Pune,Maharshtra,India",
  img:"korigad2.jpg",
  discription:"Korigad is a hill fort located about 20 km south of Lonavla in Pune district, Maharashtra, India. Its date of construction is not known but likely predates 1500. It is about 923 m above sea level."
},
{
  id:2,
  title:"Hampta Pass",
  subtitle:"Himachal Pradesh,India",
  img:"hampta1.jpg",
  discription:"Hamta Pass lies at an altitude of 4270 m on the Pir Panjal range in the Himalayas. It is a small corridor between Lahaul's Chandra Valley and Kullu valley of Himachal Pradesh, India.Generally, it takes 4 days to complete the trek."
},
{
  id:3,
  title:"Rajmachi",
  subtitle:"Pune,Maharshtra,India",
  img:"rajmachi.jpg",
  discription:"Rajmachi Fort is one of the many historical forts in the rugged hills of Sahyadri mountains. It consists of two twin fortresses Shriwardhan Ballekilla and Manaranjan Balekilla, with a wide machi surrounding the two Balekillas."
},
{
  id:4,
  title:"Karoll Hill",
  subtitle:"Himachal Pradesh,India",
  img:"karol-hill.jpg",
  discription:"Karol Tibba is a heaven on earth for those who are seeking to escape the bustling and blaring sounds of the city.One gets enough time to rest and take in the beauty of the panoramic views of the city and hills."
},
]

count(n){
  this.liked.push(n);
  console.log(n);
}
}
