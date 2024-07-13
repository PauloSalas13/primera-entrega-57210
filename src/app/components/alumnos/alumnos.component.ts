import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormatDatePipe } from '../../pipes/format-date.pipe';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
  providers: [FormatDatePipe]
})
export class AlumnosComponent implements OnChanges {
  @Input() data: any[] = [];

  displayedColumns: string[] = ['rut', 'nombre', 'apellido', 'fechaInscripcion', 'direccion', 'telefono', 'email', 'vigente', 'acciones'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  showModal: boolean = false;
  newRowForm: FormGroup;
  isEditing: boolean = false;

  constructor(private fb: FormBuilder, private formatDatePipe: FormatDatePipe) {
    this.newRowForm = this.fb.group({
      rut: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaInscripcion: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      vigente: [false]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      console.log('Data Recibida:', this.data);
    }
  }

  deleteRow(index: number) {
    this.data.splice(index, 1);
    this.data = [...this.data];
  }

  openModal() {
    this.isEditing = false;
    this.newRowForm.reset();
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  updateRow(index: number) {
    this.isEditing = true;
    const rowToUpdate = this.data[index];
    this.newRowForm.patchValue({
      rut: rowToUpdate.rut,
      nombre: rowToUpdate.nombre,
      apellido: rowToUpdate.apellido,
      fechaInscripcion: new Date(rowToUpdate.fechaInscripcion),
      direccion: rowToUpdate.direccion,
      telefono: rowToUpdate.telefono,
      email: rowToUpdate.email,
      vigente: rowToUpdate.vigente
    });
    this.showModal = true;
  }

  saveRow() {
    if (this.newRowForm.valid) {
      const formattedRow = {
        ...this.newRowForm.value,
        fechaInscripcion: this.formatDatePipe.transform(this.newRowForm.value.fechaInscripcion),
      };

      const indexToUpdate = this.data.findIndex(d => d.rut === formattedRow.rut);
      if (indexToUpdate !== -1) {
        this.data[indexToUpdate] = formattedRow;
        this.data = [...this.data];
      } else {
        this.data.push(formattedRow);
        this.data = [...this.data];
      }

      this.closeModal();
    }
  }
}
