import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'P9nUywkRI3FfE7o9Xuq3AlCrvSd2nQEu';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs/';
  private _historial: string[] = [];

  public resultados: Gif[] = [];
  
  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  

  buscarGifs(query: string) {
    query = query.trim().toUpperCase();
    if (!query.length) return;
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      if (this._historial.length > 10) this._historial.pop();
      localStorage.setItem('historial', JSON.stringify(this._historial));
      
    }
    // console.log(this._historial);

    const params = new HttpParams()
    .set("api_key", this.apiKey)
    .set("q", query)
    .set("limit", 10)
    // console.log(params);
    

    this.http
      .get<SearchGifsResponse>(
        `${this.servicioUrl}search`, {params}
      )
      .subscribe((resp) => {
        // console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
