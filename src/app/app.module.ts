import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Necessário para roteamento
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';  // Importando o componente

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent  // Declarando o BooksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([  // Configurando as rotas
      { path: '', component: BooksComponent },  // A primeira rota é o BooksComponent
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
