import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { GrillaComponent } from './components/grilla/grilla.component';
import { MessageComponent } from './components/message/message-component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { AlumnosComponent } from './components/alumnos/alumnos.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    CursoListComponent,
    GrillaComponent,
    MessageComponent,
    FormatDatePipe,
    AlumnosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,  
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

