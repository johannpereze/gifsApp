import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    query = query.trim().toUpperCase();
    if (!query.length) return;
    if (this._historial.includes(query)) return;
    this._historial.unshift(query);
    if (this._historial.length > 10) this._historial.pop();
    console.log(this._historial);
  }
}
