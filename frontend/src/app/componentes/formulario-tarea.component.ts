import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../modelos/tarea.modelo';

@Component({
  selector: 'app-formulario-tarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-tarea.component.html'
})
export class FormularioTareaComponent implements OnChanges {
  @Input() tareaInicial?: Tarea;
  @Output() alGuardar = new EventEmitter<Tarea>();
  @Output() alCancelar = new EventEmitter<void>();

  tarea: Tarea = this.limpiarTarea();
  editando = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tareaInicial'] && this.tareaInicial) {
      this.tarea = { ...this.tareaInicial };
      this.editando = true;
    } else if (changes['tareaInicial'] && !this.tareaInicial) {
      this.tarea = this.limpiarTarea();
      this.editando = false;
    }
  }

  enviar() {
    this.alGuardar.emit(this.tarea);
    this.tarea = this.limpiarTarea();
    this.editando = false;
  }

  cancelar() {
    this.alCancelar.emit();
    this.tarea = this.limpiarTarea();
    this.editando = false;
  }

  private limpiarTarea(): Tarea {
    return {
      titulo: '',
      descripcion: '',
      asignatura: '',
      fecha_entrega: new Date().toISOString().split('T')[0],
      prioridad: 'media',
      estado: 'pendiente'
    };
  }
}
