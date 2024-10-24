import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-symbols',
  standalone: true,
  imports: [],
  templateUrl: './symbols.component.html',
  styleUrl: './symbols.component.css',
})
export class SymbolsComponent {
  @Output() symbolSelected = new EventEmitter<string>();

  public modifySymbol(i: string) {
    this.symbolSelected.emit(i);
  }
}
