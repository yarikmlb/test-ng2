import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-square',
  templateUrl: 'square.component.html',
  styleUrls: ['square.component.css']
})
export class SquareComponent implements OnInit {

  @Input()
  square: any;

  @Output() set: EventEmitter<any> = new EventEmitter();


  constructor() {

  }
  getValue() {
    this.set.emit({square: this.square});
  }

  ngOnInit() {
  }

}
