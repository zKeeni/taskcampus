import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../modelos/tarea.modelo';

@Component({
  selector: 'app-formulario-tarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 class="text-xl font-bold mb-4 text-gray-800">{{ editando ? 'Editar Tarea' : 'Nueva Tarea' }}</h2>
      <form (ngSubmit)="enviar()" #tareaForm="ngForm" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="md:col-span-2">
          <label class="block text-sm font-medium text-gray-700">Título</label>
          <input type="text" [(ngModel)]="tarea.titulo" name="titulo" required
                 class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500">
        </div>
        
        <div class="md:col-span-2">
          <label class="block text-sm font-medium text-gray-700">Descripción</label>
          <textarea [(ngModel)]="tarea.descripcion" name="descripcion"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Asignatura</label>
          <input type="text" [(ngModel)]="tarea.asignatura" name="asignatura" required
                 class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Fecha de Entrega</label>
          <input type="date" [(ngModel)]="tarea.fecha_entrega" name="fecha_entrega" required
                 class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Prioridad</label>
          <select [(ngModel)]="tarea.prioridad" name="prioridad" required
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Estado</label>
          <select [(ngModel)]="tarea.estado" name="estado" required
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="pendiente">Pendiente</option>
            <option value="en proceso">En proceso</option>
            <option value="finalizada">Finalizada</option>
          </select>
        </div>

        <div class="md:col-span-2 flex justify-end space-x-2">
          <button type="button" *ngIf="editando" (click)="cancelar()"
                  class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            Cancelar
          </button>
          <button type="submit" [disabled]="!tareaForm.form.valid"
                  class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50">
            {{ editando ? 'Actualizar' : 'Guardar' }}
          </button>
        </div>
      </form>
    </div>
  `
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
