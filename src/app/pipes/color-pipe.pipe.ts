import { Pipe, PipeTransform } from '@angular/core';

const CLASSES_CORES = {
  redSymbol: 'redSymbol',
  blackSymbol: 'blackSymbol',
};

@Pipe({
  name: 'colorPipe',
  standalone: true,
})
export class ColorPipe implements PipeTransform {
  transform(symbolShow: string, classes = CLASSES_CORES): string {
    // Use '===' for strict equality comparison
    if (symbolShow === '♥' || symbolShow === '♦') {
      return classes.redSymbol;
    } else {
      return classes.blackSymbol;
    }
  }
}
