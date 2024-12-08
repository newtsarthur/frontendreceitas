import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiUrl = `${config.apiUrl}/books`; // API de Books

  constructor(private http: HttpClient) { }

  // Método para pegar todos os livros
  getBooks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
