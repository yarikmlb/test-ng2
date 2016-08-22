import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-square',
  templateUrl: 'square.component.html',
  styleUrls: ['square.component.css']
})
export class SquareComponent implements OnInit {
  public value: string;

  constructor() {
    this.value = '';
  }
  setRandomValue() {
    if(this.value === ''){
      this.value = 'X'

    }else if(this.value === 'X'){
      this.value = '0';

    }
  }

  ngOnInit() {
  }

}
