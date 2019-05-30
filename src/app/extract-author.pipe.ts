import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractAuthor'
})
export class ExtractAuthorPipe implements PipeTransform {

  transform(value: string): string {
    const authorRegex = '(?<=\").+(?=\")';
    return value.match(authorRegex) ? value.match(authorRegex)[0] : '';
  }

}
