import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectionPipe',
  standalone: true
})
export class SelectionPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
