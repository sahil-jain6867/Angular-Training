import { Component } from '@angular/core';
import { Answer } from './enum';

 //Enum
 enum Direction {
  left,
  right,
  top,
  bottom
}

//Interfaces
interface testObj {
  right:Number,
  left:String,
  up:boolean,
  down:any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
 title:string = 'testing';  // String is Modifier Annotation
 count: number = 0;
 childHide: boolean = true;
 direction = Direction;
 answer = Answer;
 products = [];
 productdetail:any = null;
 // Arrow Function
  sum = (x:string,y:number,z:any) => {  
    console.log("ES6 Arrow function", 5+6);
    let arr = [1,3,4,5];
    // alert(x+y+z);
  }
  //forEach Function in TS
  // arr.forEach(val =>){
    
  // }

  constructor(){
    console.log(this.title);
    this.sum("4", 5, 5);
    console.log(this.direction)
    console.log(this.answer)
    // console.log(arr.right)
  }

  total(a:number,b:number){
    console.log(a+b);
    let c = a + b;
    this.sum("angular",4,5);
    return c;
  }

  assignData(event:any){
    console.log(event);
    this.productdetail = event;
  }
}


