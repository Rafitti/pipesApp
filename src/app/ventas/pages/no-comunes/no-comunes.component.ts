import { Component } from '@angular/core';
import { interval } from "rxjs";

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {


  nombre:string =  'Rafael';
  genero:string = 'masculino';

  invitacionMap = {
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Guido', 'Vani', 'Mathias'];

  clientesMapa = {
    '=0': 'No tenemos ningún cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    '=2': 'Tenemos dos clientes esperando',
    'other': 'Tenemos # clientes esperando'
  }
  cambiarCliente(){
    this.nombre = 'Melanie';
    this.genero = 'femenino'
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //Keyvalue Pipe
  persona = {
    nombre: 'Rafael',
    edad: 29,
    direccion: 'Buenos Aires, Argentina'
  }

  // JsonPipe
  heroes=
  [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Constantine',
      vuela: false
    }
  ]

  //AsyncPipe
  miObservable= interval(1000); // 0,1,2,3,4,5,6,

  valorPromesa = new Promise((resolve,reject) => {
    
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500);

  });

}
