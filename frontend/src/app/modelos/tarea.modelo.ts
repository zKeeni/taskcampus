export interface Tarea {
  id?: number;
  titulo: string;
  descripcion?: string;
  asignatura: string;
  fecha_entrega: string;
  prioridad: 'baja' | 'media' | 'alta';
  estado: 'pendiente' | 'en proceso' | 'finalizada';
}

export interface ResumenTareas {
  total: number;
  pendientes: number;
  finalizadas: number;
  alta_prioridad: number;
}
