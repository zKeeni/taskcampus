import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea, ResumenTareas } from '../modelos/tarea.modelo';

@Injectable({
  providedIn: 'root'
})
export class ServicioTareas {
  private urlApi = 'http://localhost:8000/tareas';

  constructor(private http: HttpClient) { }

  listarTareas(filtros?: { estado?: string, prioridad?: string, asignatura?: string }): Observable<Tarea[]> {
    let params = new HttpParams();
    if (filtros) {
      if (filtros.estado) params = params.set('estado', filtros.estado);
      if (filtros.prioridad) params = params.set('prioridad', filtros.prioridad);
      if (filtros.asignatura) params = params.set('asignatura', filtros.asignatura);
    }
    return this.http.get<Tarea[]>(this.urlApi, { params });
  }

  consultarTarea(id: number): Observable<Tarea> {
    return this.http.get<Tarea>(`${this.urlApi}/${id}`);
  }

  crearTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.urlApi, tarea);
  }

  actualizarTarea(id: number, tarea: Partial<Tarea>): Observable<Tarea> {
    return this.http.put<Tarea>(`${this.urlApi}/${id}`, tarea);
  }

  eliminarTarea(id: number): Observable<any> {
    return this.http.delete(`${this.urlApi}/${id}`);
  }

  obtenerResumen(): Observable<ResumenTareas> {
    return this.http.get<ResumenTareas>(`${this.urlApi}/resumen`);
  }
}
