import { Component } from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrl: './exercise1.component.css'
})
export class Exercise1Component {
  name = '';
  selectedFont = 'Calibri';
  fontSize = 20;
  selectedAlignment = 'left';
  value = '';

  getAlignment() {
    return this.selectedAlignment;
  }
}
