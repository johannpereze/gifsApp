import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; //Va a buscar un elemento con la referencia dentro del paréntesis y se lo va a asignar a la variable que estamos inicializando al final de esta línea
  //el simbolo ! se llama non-null assertion operator y le dice a typescript que confíe en mí, que nunca se lo voy a mandar nulo
  buscar() {
    console.log(this.txtBuscar.nativeElement.value);
    this.txtBuscar.nativeElement.value = '';
  }
}
