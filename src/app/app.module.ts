import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './pages/layout/toolbar/toolbar.component';
import { NavbarComponent } from './pages/layout/navbar/navbar.component';

import { GrillaComponent } from './pages/grilla/grilla.component';
import { MessageComponent } from './pages/message/message-component';
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
import { FormatDatePipe } from './shared/pipes/format-date.pipe';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';

import { CursoListComponent } from './pages/curso-list/curso-list.component';
import { CursoDisponiblePipe } from './shared/pipes/curso-disponible.pipe';
import { HeaderStyleDirective } from './directives/header-style.directive';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    CursoListComponent,
    GrillaComponent,
    MessageComponent,
    FormatDatePipe,
    AlumnosComponent,
    CursoDisponiblePipe,
    HeaderStyleDirective,
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

