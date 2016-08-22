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

  constructor(){
    this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  }
}
