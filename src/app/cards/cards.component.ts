import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../models/card';
import { ColorPipe } from '../pipes/color-pipe.pipe';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, ColorPipe],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnChanges {
  @Input() numberShow = '';
  @Input() symbolShow = '';

  public card: Card = new Card(this.numberShow, this.symbolShow);

  public modifyNumber(i: string) {
    this.numberShow = i;
  }

  public modifySymbol(i: string) {
    this.symbolShow = i;
  }

  ngOnChanges() {
    this.card = new Card(this.numberShow, this.symbolShow);
  }
}
