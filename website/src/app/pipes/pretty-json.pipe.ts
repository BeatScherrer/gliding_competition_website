import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyJson',
})
export class PrettyJsonPipe implements PipeTransform {
  transform(value: unknown): string {
    return JSON.stringify(value, null, 4);
  }
}
