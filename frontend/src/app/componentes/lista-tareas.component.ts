import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../modelos/tarea.modelo';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-tareas.component.html'
})
export class ListaTareasComponent {
  @Input() tareas: Tarea[] = [];
  @Output() alFiltrar = new EventEmitter<any>();
  @Output() alEditar = new EventEmitter<Tarea>();
  @Output() alEliminar = new EventEmitter<number>();

  filtros = {
    estado: '',
    prioridad: '',
    asignatura: ''
  };

  filtrar() {
    this.alFiltrar.emit({ ...this.filtros });
  }
}
