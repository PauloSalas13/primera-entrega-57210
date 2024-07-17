import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNavbar: boolean = true;
  selectedComponent: string = 'principal';
  dataFromNavbar: any[] = [];
  dataFromAlumnos: any[] = [];

  title = 'primera-entrega-angular';

  handleDataChanged(event: { cursos: any[], alumnos: any[], destino: string }) {
    this.dataFromNavbar = event.cursos;
    this.dataFromAlumnos = event.alumnos;
    this.selectedComponent = event.destino;
  }
  
  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }

}




