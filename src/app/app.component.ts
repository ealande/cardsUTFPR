import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SymbolsComponent } from './symbols/symbols.component';
import { CardsComponent } from './cards/cards.component';
import { NumbersComponent } from './numbers/numbers.component';
import { FiguresComponent } from './figures/figures.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NumbersComponent,
    CardsComponent,
    FiguresComponent,
    RouterOutlet,
    SymbolsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedNumber = '';
  selectedSymbol = '';

  updateNumber(newNumber: string) {
    this.selectedNumber = newNumber;
  }

  updateSymbol(newSymbol: string) {
    this.selectedSymbol = newSymbol;
  }
}
