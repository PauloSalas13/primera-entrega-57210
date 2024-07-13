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

  handleDataChanged(event: { newData: any[], newAlumnos: any[], destino: string }) {
    this.dataFromNavbar = event.newData;
    this.dataFromAlumnos = event.newAlumnos;
    this.selectedComponent = event.destino;
  }
  
  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }

}




