import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormatDatePipe } from '../../shared/pipes/format-date.pipe';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.scss'],
  providers: [FormatDatePipe]
})
export class GrillaComponent implements OnChanges {
  @Input() data: any[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'especialidad', 'profesor', 'fechaInicio', 'fechaTermino', 'vigente', 'acciones'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  showModal: boolean = false;
  newRowForm: FormGroup;

  constructor(private fb: FormBuilder, private formatDatePipe: FormatDatePipe) {
    this.newRowForm = this.fb.group({
      id: [null],
      nombre: ['', Validators.required],
      especialidad: ['', Validators.required],
      profesor: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaTermino: ['', Validators.required],
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

   this.newRowForm.reset();

    const maxId = Math.max(...this.data.map(d => d.id), 0);
    this.newRowForm.patchValue({ id: maxId + 1 });
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  updateRow(index: number) {
    const rowToUpdate = this.data[index];
    this.newRowForm.patchValue({
      id: rowToUpdate.id,
      nombre: rowToUpdate.nombre,
      especialidad: rowToUpdate.especialidad,
      profesor: rowToUpdate.profesor,
      fechaInicio: new Date(rowToUpdate.fechaInicio),
      fechaTermino: new Date(rowToUpdate.fechaTermino),
      vigente: rowToUpdate.vigente
    });
    this.showModal = true;
  }

  saveRow() {
    if (this.newRowForm.valid) {
      const formattedRow = {
        ...this.newRowForm.value,
        fechaTermino: this.formatDatePipe.transform(this.newRowForm.value.fechaTermino),
        fechaInicio: this.formatDatePipe.transform(this.newRowForm.value.fechaInicio)
      };

      const indexToUpdate = this.data.findIndex(d => d.id === formattedRow.id);
      if (indexToUpdate !== -1) {
        const indexToUpdate = this.data.findIndex(d => d.id === formattedRow.id);
        if (indexToUpdate !== -1) {
          this.data[indexToUpdate] = formattedRow;
          this.data = [...this.data];
        }
      } else {
        this.data.push(formattedRow);
        this.data = [...this.data];
      }
  
      this.closeModal();
    } 
  }


}
