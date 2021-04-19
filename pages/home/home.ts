import { Component, Input } from '@angular/core';
import { Button, Item, NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 height: number;
 weight: number;
 bmi: number;
 message: string;


  constructor(public navCtrl: NavController) {

  }
  
  calculateBMI(){

    this.bmi = this.weight/(this.height * this.height)

    this.bmi = parseFloat(this.bmi.toFixed(2))

    if (this.bmi < 18.5){
      this.message= "Underweight";
    } else if (this.bmi >= 18.5 && this.bmi < 25){
      this.message= "Normal";
    } else if (this.bmi >= 25 && this.bmi < 30){
      this.message= "Overweight";
    } else {
      this.message= "Obese";
    }

  }


  

}





  
  
