import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SymbolsComponent } from './symbols/symbols.component';
import { CardsComponent } from './cards/cards.component';
import { NumbersComponent } from './numbers/numbers.component';
import { FiguresComponent } from './figures/figures.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SymbolsComponent, CardsComponent, NumbersComponent, FiguresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cardsUtfpr';
}
