import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../modelos/tarea.modelo';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 class="text-xl font-bold text-gray-800">Mis Tareas</h2>
        <div class="flex flex-wrap gap-2">
          <select [(ngModel)]="filtros.estado" (change)="filtrar()" class="border rounded p-1 text-sm">
            <option value="">Todos los estados</option>
            <option value="pendiente">Pendiente</option>
            <option value="en proceso">En proceso</option>
            <option value="finalizada">Finalizada</option>
          </select>
          <select [(ngModel)]="filtros.prioridad" (change)="filtrar()" class="border rounded p-1 text-sm">
            <option value="">Todas las prioridades</option>
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
          <input type="text" [(ngModel)]="filtros.asignatura" (keyup.enter)="filtrar()" 
                 placeholder="Asignatura..." class="border rounded p-1 text-sm">
          <button (click)="filtrar()" class="bg-gray-200 px-3 py-1 rounded text-sm hover:bg-gray-300">Filtrar</button>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarea</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asignatura</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Entrega</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prioridad</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr *ngFor="let tarea of tareas" class="hover:bg-gray-50">
              <td class="px-6 py-4">
                <div class="text-sm font-medium text-gray-900">{{ tarea.titulo }}</div>
                <div class="text-xs text-gray-500">{{ tarea.descripcion }}</div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-500">{{ tarea.asignatura }}</td>
              <td class="px-6 py-4 text-sm text-gray-500">{{ tarea.fecha_entrega }}</td>
              <td class="px-6 py-4">
                <span [ngClass]="{
                  'bg-red-100 text-red-800': tarea.prioridad === 'alta',
                  'bg-yellow-100 text-yellow-800': tarea.prioridad === 'media',
                  'bg-blue-100 text-blue-800': tarea.prioridad === 'baja'
                }" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full uppercase">
                  {{ tarea.prioridad }}
                </span>
              </td>
              <td class="px-6 py-4">
                <span [ngClass]="{
                  'bg-green-100 text-green-800': tarea.estado === 'finalizada',
                  'bg-indigo-100 text-indigo-800': tarea.estado === 'en proceso',
                  'bg-gray-100 text-gray-800': tarea.estado === 'pendiente'
                }" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full uppercase">
                  {{ tarea.estado }}
                </span>
              </td>
              <td class="px-6 py-4 text-right text-sm font-medium">
                <button (click)="alEditar.emit(tarea)" class="text-blue-600 hover:text-blue-900 mr-3">Editar</button>
                <button (click)="alEliminar.emit(tarea.id!)" class="text-red-600 hover:text-red-900">Eliminar</button>
              </td>
            </tr>
            <tr *ngIf="tareas.length === 0">
              <td colspan="6" class="px-6 py-10 text-center text-gray-500">No se encontraron tareas.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
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
    this.alFiltrar.emit(this.filtros);
  }
}
