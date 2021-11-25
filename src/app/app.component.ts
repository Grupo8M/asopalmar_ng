import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cliente: string = 'Nombre 1';
  
  clientes: string[]=["Asociado 1","Asociado 2"];
 
  title = 'asopalmarc4';

  mostrarMensaje(): void{
    let mensaje="Hello world";
  }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

  
//   title = 'c4-g23-facturador';

 
// }