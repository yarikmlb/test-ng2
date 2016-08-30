import { Component } from '@angular/core';
import {SquareComponent} from "./square/";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ SquareComponent]
})
export class AppComponent {
  public list = [];
  public value = '';
  public count = 0;
  public result = [];

  constructor(){
    this.generateGame(9);
  }

  generateGame(count){
    for(let i = 0; i < count; i++){
      this.list.push(this.createSquare());
    }
  }

  createSquare() {
    return {value: ''};
  }

  changeValue(square){
    if(this.count % 2 === 0 && square.value === ''){
      square.value = 1;
      this.count += 1;
      this.findResult(this.list);
    }else if(this.count % 2 !== 0 && square.value === ''){
      square.value = 0;
      this.count +=1;
      this.findResult(this.list);
    }
  }

  findResult(array){
    if(array[0].value === array[1].value && array[1].value === array[2].value && array[2].value === 1 ||
      array[0].value === array[3].value && array[3].value === array[6].value && array[6].value === 1 ||
      array[0].value === array[4].value && array[4].value === array[8].value && array[8].value === 1 ||
      array[1].value === array[4].value && array[4].value === array[7].value && array[7].value === 1 ||
      array[2].value === array[5].value && array[5].value === array[8].value && array[8].value === 1 ||
      array[3].value === array[4].value && array[4].value === array[5].value && array[5].value === 1 ||
      array[6].value === array[7].value && array[7].value === array[8].value && array[8].value === 1 ||
      array[6].value === array[4].value && array[4].value === array[2].value && array[2].value === 1 ){
      setTimeout(() => {
        alert("Player with X, win!!!");
      }, 500);
    }else if(array[0].value === array[1].value && array[1].value === array[2].value && array[2].value === 0 ||
      array[0].value === array[3].value && array[3].value === array[6].value && array[6].value === 0 ||
      array[0].value === array[4].value && array[4].value === array[8].value && array[8].value === 0 ||
      array[1].value === array[4].value && array[4].value === array[7].value && array[7].value === 0 ||
      array[2].value === array[5].value && array[5].value === array[8].value && array[8].value === 0 ||
      array[3].value === array[4].value && array[4].value === array[5].value && array[5].value === 0 ||
      array[6].value === array[7].value && array[7].value === array[8].value && array[8].value === 0 ||
      array[6].value === array[4].value && array[4].value === array[2].value && array[2].value === 0 ){
      setTimeout(() => {
        alert("Player with 0, win!!!");
      }, 500);
    }
  }
  playAgain(){

  }
}
