import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioTareas } from './servicios/servicio-tareas.service';
import { ServicioTemas, TipoTema } from './servicios/servicio-temas.service';
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
  filtrosActuales: any = {};

  constructor(
    private servicioTareas: ServicioTareas,
    public servicioTemas: ServicioTemas,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cambiarTema(tema: TipoTema) {
    this.servicioTemas.establecerTema(tema);
    this.cdr.detectChanges();
  }

  cargarDatos(filtros?: any) {
    if (filtros) {
      this.filtrosActuales = { ...filtros };
    }
    this.servicioTareas.listarTareas(this.filtrosActuales).subscribe(tareas => {
      this.tareas = tareas;
      this.cdr.detectChanges(); // Forzar actualización de la vista
    });
    this.servicioTareas.obtenerResumen().subscribe(resumen => {
      this.resumen = resumen;
      this.cdr.detectChanges();
    });
  }

  abrirNuevoModal() {
    this.tareaSeleccionada = undefined;
    this.mostrarModal = true;
  }

  guardarTarea(tarea: Tarea) {
    if (tarea.id) {
      this.servicioTareas.actualizarTarea(tarea.id, tarea).subscribe(() => {
        this.cargarDatos(this.filtrosActuales);
        this.cerrarModal();
      });
    } else {
      this.servicioTareas.crearTarea(tarea).subscribe(() => {
        this.cargarDatos(this.filtrosActuales);
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
        this.cargarDatos(this.filtrosActuales);
      });
    }
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.tareaSeleccionada = undefined;
  }
}
