import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

// //Servicios
// import { ClienteService } from './clientes/cliente.service';

// //Componentes
// import { AppComponent } from './app.component';
// import { ClienteComponent } from './clientes/cliente.component';
// import { ProductosComponent } from './productos/productos.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { DirectivaComponent } from './directiva/directiva.component';
