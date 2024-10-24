import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-figures',
  standalone: true,
  imports: [],
  templateUrl: './figures.component.html',
  styleUrl: './figures.component.css',
})
export class FiguresComponent {
  @Output() numberSelected = new EventEmitter<string>();

  public modifyNumber(i: string) {
    this.numberSelected.emit(i);
  }
}
