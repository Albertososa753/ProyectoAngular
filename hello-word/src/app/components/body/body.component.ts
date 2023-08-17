import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {
  mostrar = true;
  frase: any = {
    autor: 'Peter Parker',
    mensaje: 'Un poder requiere una gran responsabilidad',
  };

  personajes: string[] = ['Spiderman', 'Hulk', 'Venom'];
}
