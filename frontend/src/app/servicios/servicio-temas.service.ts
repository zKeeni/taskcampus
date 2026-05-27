import { Injectable, signal } from '@angular/core';

export type TipoTema = 'rojo' | 'azul' | 'verde' | 'morado' | 'amarillo' | 'negro';

@Injectable({
  providedIn: 'root'
})
export class ServicioTemas {
  private readonly STORAGE_KEY = 'taskcampus-tema';
  
  // Signal para el tema actual, recuperando de localStorage si existe
  temaActual = signal<TipoTema>(this.obtenerTemaInicial());

  constructor() {}

  establecerTema(nuevoTema: TipoTema) {
    this.temaActual.set(nuevoTema);
    localStorage.setItem(this.STORAGE_KEY, nuevoTema);
  }

  private obtenerTemaInicial(): TipoTema {
    const guardado = localStorage.getItem(this.STORAGE_KEY) as TipoTema;
    return guardado || 'rojo';
  }

  obtenerClasesFondo(): string {
    switch (this.temaActual()) {
      case 'azul': return 'from-blue-600 via-blue-800 to-indigo-950';
      case 'verde': return 'from-emerald-600 via-green-800 to-teal-950';
      case 'morado': return 'from-purple-600 via-violet-800 to-fuchsia-950';
      case 'amarillo': return 'from-amber-500 via-orange-600 to-yellow-800';
      case 'negro': return 'from-gray-800 via-gray-900 to-black';
      case 'rojo': 
      default: return 'from-red-600 via-blue-700 to-indigo-900';
    }
  }

  obtenerClaseBoton(): string {
    switch (this.temaActual()) {
      case 'azul': return 'bg-blue-600 hover:bg-blue-700 shadow-blue-900/20';
      case 'verde': return 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-900/20';
      case 'morado': return 'bg-purple-600 hover:bg-purple-700 shadow-purple-900/20';
      case 'amarillo': return 'bg-amber-500 hover:bg-amber-600 shadow-amber-900/20';
      case 'negro': return 'bg-gray-800 hover:bg-gray-900 shadow-black/20';
      case 'rojo': 
      default: return 'bg-red-500 hover:bg-red-600 shadow-red-900/20';
    }
  }
}
