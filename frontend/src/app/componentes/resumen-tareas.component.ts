import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumenTareas } from '../modelos/tarea.modelo';

@Component({
  selector: 'app-resumen-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumen-tareas.component.html'
})
export class ResumenTareasComponent {
  @Input() resumen: ResumenTareas = {
    total: 0,
    pendientes: 0,
    finalizadas: 0,
    alta_prioridad: 0
  };
}
