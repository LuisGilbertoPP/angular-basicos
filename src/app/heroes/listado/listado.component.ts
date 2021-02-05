import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  
  nombreBorrado: string = '';
  heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];  

  borrarHeroe(){
    this.nombreBorrado = this.heroes.shift() || '';
  }
}
