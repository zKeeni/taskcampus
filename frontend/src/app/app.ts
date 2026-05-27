import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioTareas } from './servicios/servicio-tareas.service';
import { Tarea, ResumenTareas } from './modelos/tarea.modelo';
import { ResumenTareasComponent } from './componentes/resumen-tareas.component';
import { FormularioTareaComponent } from './componentes/formulario-tarea.component';
import { ListaTareasComponent } from './componentes/lista-tareas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    ResumenTareasComponent, 
    FormularioTareaComponent, 
    ListaTareasComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  tareas: Tarea[] = [];
  resumen: ResumenTareas = { total: 0, pendientes: 0, finalizadas: 0, alta_prioridad: 0 };
  tareaSeleccionada?: Tarea;
  mostrarModal = false;

  constructor(private servicioTareas: ServicioTareas) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos(filtros?: any) {
    this.servicioTareas.listarTareas(filtros).subscribe(tareas => {
      this.tareas = tareas;
    });
    this.servicioTareas.obtenerResumen().subscribe(resumen => {
      this.resumen = resumen;
    });
  }

  abrirNuevoModal() {
    this.tareaSeleccionada = undefined;
    this.mostrarModal = true;
  }

  guardarTarea(tarea: Tarea) {
    if (tarea.id) {
      this.servicioTareas.actualizarTarea(tarea.id, tarea).subscribe(() => {
        this.cargarDatos();
        this.cerrarModal();
      });
    } else {
      this.servicioTareas.crearTarea(tarea).subscribe(() => {
        this.cargarDatos();
        this.cerrarModal();
      });
    }
  }

  editarTarea(tarea: Tarea) {
    this.tareaSeleccionada = { ...tarea };
    this.mostrarModal = true;
  }

  eliminarTarea(id: number) {
    if (confirm('¿Estás seguro de eliminar esta tarea?')) {
      this.servicioTareas.eliminarTarea(id).subscribe(() => {
        this.cargarDatos();
      });
    }
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.tareaSeleccionada = undefined;
  }
}
