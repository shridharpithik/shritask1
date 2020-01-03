import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fyletask',
  templateUrl: './fyletask.component.html',
  styleUrls: ['./fyletask.component.css']
})
export class FyletaskComponent implements OnInit {
  Serving = [25, 50, 100, 200];
  amt:number = 1;
  dis: number = 0;
  saving: number;

  lolipopprice: number;
  IcecandyPrice: number;

  clickedlolisaving: number;
  clickedicesaving: number;

  formonthoranual = false;
  Islolipup:boolean=false; // hide saving toggle button
  IsIcecream:boolean=false;
  service:any; // service store in card title
   togglebutton=false; // hide toggle button 
   hidecard:boolean=false;

 ServeClick(ClickedAmount: any) {

 
  this.togglebutton=true;  // hide toggle button 
  this.hidecard=true;
  this.service = ClickedAmount; // service store in card title
 
  this.saving = (this.amt * this.dis) / 100;
    this.lolipopprice = (this.amt - this.saving) * ClickedAmount;

    this.saving = (this.amt * this.dis) / 100;
    this.IcecandyPrice = ((this.amt - this.saving) * ClickedAmount) * 2;
    console.log(this.lolipopprice);
    console.log(this.IcecandyPrice);

  }


  ShowSavedlollipop(clickedloliprice:number) {

    // hide saving toggle button
    this.Islolipup=true;
    this.IsIcecream=false;
   
    if (this.formonthoranual == true) {
      this.clickedlolisaving = clickedloliprice;
    } else {
      this.clickedlolisaving = clickedloliprice/2 ;
    }
  }
  ShowSavedicecandy(clickediceprice:number) {
  
    // hide saving toggle button
    this.IsIcecream=true;
    this.Islolipup=false;

    if (this.formonthoranual == true) {
      this.clickedicesaving = clickediceprice;
    } else {
      this.clickedicesaving = clickediceprice/2;
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
