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

  obtenerClaseBotonPrincipal(): string {
    const tema = this.temaActual();
    if (tema === 'rojo') {
      return 'bg-red-500 hover:bg-red-600 text-white shadow-red-900/20';
    }
    // Para el resto: Botón Blanco con texto del color del tema
    switch (tema) {
      case 'azul': return 'bg-white hover:bg-blue-50 text-blue-700 shadow-white/20';
      case 'verde': return 'bg-white hover:bg-green-50 text-emerald-700 shadow-white/20';
      case 'morado': return 'bg-white hover:bg-purple-50 text-purple-700 shadow-white/20';
      case 'amarillo': return 'bg-white hover:bg-amber-50 text-amber-700 shadow-white/20';
      case 'negro': return 'bg-white hover:bg-gray-100 text-black shadow-white/20';
      default: return 'bg-white text-gray-800';
    }
  }

  obtenerClaseCabeceraModal(): string {
    switch (this.temaActual()) {
      case 'azul': return 'bg-gradient-to-r from-blue-600 to-blue-800';
      case 'verde': return 'bg-gradient-to-r from-emerald-600 to-green-700';
      case 'morado': return 'bg-gradient-to-r from-purple-600 to-violet-700';
      case 'amarillo': return 'bg-gradient-to-r from-amber-500 to-orange-600';
      case 'negro': return 'bg-gradient-to-r from-gray-800 to-black';
      case 'rojo': 
      default: return 'bg-gradient-to-r from-red-600 to-blue-700';
    }
  }

  obtenerClaseBotonAccion(): string {
    switch (this.temaActual()) {
      case 'azul': return 'bg-blue-600 hover:bg-blue-700';
      case 'verde': return 'bg-emerald-600 hover:bg-emerald-700';
      case 'morado': return 'bg-purple-600 hover:bg-purple-700';
      case 'amarillo': return 'bg-amber-500 hover:bg-amber-600';
      case 'negro': return 'bg-gray-800 hover:bg-gray-900';
      case 'rojo': 
      default: return 'bg-red-500 hover:bg-red-600';
    }
  }
}
