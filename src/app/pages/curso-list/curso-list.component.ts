import { Component, Input, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {
  @Input() data: any[] = [];
  displayedColumns: string[] = ['cursoDisponible'];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      console.log('Información recibida de alumnos', this.data);
    }
  }

  ngOnInit() {
    this.filterVigentes();
  }

  filterVigentes() {
    this.data = this.data.filter(course => course.vigente);
  }
}
