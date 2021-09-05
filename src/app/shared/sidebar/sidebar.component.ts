import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get historial(): string[] {
    return this.gifsService.historial;
  } //Esto lo hice generando un getter. No se puede hacer sin uno. Tiene que ser una función

  redibujarGifs(value: string) {
    this.gifsService.buscarGifs(value);
  }
}
