import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  transform(date: Date): string {
    if (!date) return '';

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is zero-indexed
    const day = date.getDate();

    // Formato deseado: yyyy-mm-dd
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return formattedDate;
  }
}