import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CursoListComponent } from './curso-list.component'; // Asegúrate de importar correctamente CursoListComponent aquí

@NgModule({
  declarations: [
    CursoListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class CursoListModule { 

}