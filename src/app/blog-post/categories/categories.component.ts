import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Output() public sendCategory = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onChange(value : string): void {
    this.sendCategory.emit(value);
  }
}