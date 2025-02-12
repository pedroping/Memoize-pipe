import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({
  name: 'memoize',
  standalone: true,
})
export class MemorizePipe<T, U> implements PipeTransform {
  transform(value: (...args: U[]) => T, ...args: U[]): T {
    return value(...args);
  }
}
