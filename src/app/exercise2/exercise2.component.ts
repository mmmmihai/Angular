import { Component } from '@angular/core';

export class Enreg {
  time: Date;
  operation: string;
  result: number;
  constructor (
    operation: string,
    result: number
  )
  {
    this.time= new Date();
    this.operation=operation;
    this.result=result
  }
}

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrl: './exercise2.component.css'
})
export class Exercise2Component {
  number1 = 0;
  number2 = 0;
  selectedOperation = '';
  result = 0;

  history: Array<Enreg> = [];


  compute() {
    switch (this.selectedOperation) {
      case 'add':
        this.result = this.number1 + this.number2;
        break;
      case 'subtract':
        this.result = this.number1 - this.number2;
        break;
      case 'multiply':
        this.result = this.number1 * this.number2;
        break;
      case 'divide':
        this.result = this.number1 / this.number2;
        break;
      default:
        break; 
    }
 
    const enreg= new Enreg(

      this.selectedOperation,
      this.result
    )

    this.history.unshift(enreg);
  }


  removeEnreg(enreg: any) {
    const index = this.history.indexOf(enreg);
    if (index !== -1) {
      this.history.splice(index, 1);
    }
  }
}
