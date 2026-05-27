import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumenTareas } from '../modelos/tarea.modelo';

@Component({
  selector: 'app-resumen-tareas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-blue-100 p-4 rounded-lg shadow">
        <h3 class="text-blue-800 font-bold uppercase text-xs">Total Tareas</h3>
        <p class="text-2xl font-semibold">{{ resumen.total }}</p>
      </div>
      <div class="bg-yellow-100 p-4 rounded-lg shadow">
        <h3 class="text-yellow-800 font-bold uppercase text-xs">Pendientes</h3>
        <p class="text-2xl font-semibold">{{ resumen.pendientes }}</p>
      </div>
      <div class="bg-green-100 p-4 rounded-lg shadow">
        <h3 class="text-green-800 font-bold uppercase text-xs">Finalizadas</h3>
        <p class="text-2xl font-semibold">{{ resumen.finalizadas }}</p>
      </div>
      <div class="bg-red-100 p-4 rounded-lg shadow">
        <h3 class="text-red-800 font-bold uppercase text-xs">Alta Prioridad</h3>
        <p class="text-2xl font-semibold">{{ resumen.alta_prioridad }}</p>
      </div>
    </div>
  `
})
export class ResumenTareasComponent {
  @Input() resumen: ResumenTareas = {
    total: 0,
    pendientes: 0,
    finalizadas: 0,
    alta_prioridad: 0
  };
}
