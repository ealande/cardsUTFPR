import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
  standalone: true,
})
export class NumbersComponent {
  @Output() numberSelected = new EventEmitter<string>();

  public modifyNumber(i: string) {
    this.numberSelected.emit(i);
  }
}
