import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';



let cursos  = [
  {
    "id": 1,
    "nombre": "Introducción a la Programación",
    "especialidad": "Informática",
    "profesor": "Alejandro Gómez",
    "fechaInicio": "2024-07-16",
    "fechaTermino": "2024-12-15",
    "vigente": true
  },
  {
    "id": 2,
    "nombre": "Historia del Arte",
    "especialidad": "Artes Visuales",
    "profesor": "María Fernández",
    "fechaInicio": "2024-08-15",
    "fechaTermino": "2024-11-30",
    "vigente": false
  },
  {
    "id": 3,
    "nombre": "Matemáticas Avanzadas",
    "especialidad": "Matemáticas",
    "profesor": "Juan Pérez",
    "fechaInicio": "2024-09-10",
    "fechaTermino": "2024-12-20",
    "vigente": true
  }
];

let alumnos = [
  {
    "rut": "1-9",
    "nombre": "Pedro",
    "apellido": "Salas",
    "fechaInscripcion": "2024-07-12",
    "direccion": "las vertientes 2024, macul, santiago",
    "telefono": "2218180",
    "email": "pedro.salas@gmail.com",
    "vigente": true
  },
  {
    "rut": "2-7",
    "nombre": "María",
    "apellido": "López",
    "fechaInscripcion": "2024-07-10",
    "direccion": "avenida siempre viva 123, providencia, santiago",
    "telefono": "2233445",
    "email": "maria.lopez@gmail.com",
    "vigente": true
  },
  {
    "rut": "3-5",
    "nombre": "Juan",
    "apellido": "Pérez",
    "fechaInscripcion": "2024-07-09",
    "direccion": "calle falsa 456, ñuñoa, santiago",
    "telefono": "2244556",
    "email": "juan.perez@gmail.com",
    "vigente": true
  }
];


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @Output() dataChanged = new EventEmitter<{ cursos : any[], alumnos : any[], destino: string }>(); // Evento de salida con objeto que contiene datos y origen

  destino: string = 'grilla';

  toggleCursosList() {
    this.sidenav.toggle();
  }

  handleMenuClick() {
    this.destino="principal";
    this.dataChanged.emit({ cursos: [], alumnos: [], destino: this.destino });
  }

  sendDataToParent() {
    this.destino="cursos";
    this.dataChanged.emit({ cursos , alumnos, destino: this.destino });
  }

  sendDataToParentAlumnos() {
    this.destino="alumnos";
    this.dataChanged.emit({ cursos , alumnos, destino: this.destino }); 
  }

  listCourse() {
    this.destino="curso-list";
    this.dataChanged.emit({cursos , alumnos, destino: this.destino}); 
  }
}



