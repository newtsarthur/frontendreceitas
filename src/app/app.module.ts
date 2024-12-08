import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Para fazer requisições HTTP
import { AppComponent } from './app.component';  // O componente raiz
import { BooksComponent } from './books/books.component';  // O componente que exibe os livros

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent  // Registra o componente Books
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Importa o módulo HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]  // Define o AppComponent como o componente inicial
})
export class AppModule { }
