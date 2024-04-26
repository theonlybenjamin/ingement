import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soles',
  standalone: true
})
export class SolesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'S/. ' + value;
  }

}
