import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cursoDisponible'
})
export class CursoDisponiblePipe implements PipeTransform {
  transform(element: any): string {
    return `${element.nombre} - ${element.especialidad} - ${element.profesor}`;
  }
}
