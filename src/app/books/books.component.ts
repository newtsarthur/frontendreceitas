import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBooks();  // Faz a requisição HTTP ao iniciar o componente
  }

  fetchBooks() {
    this.http.get('http://localhost:8080/culinary-books').subscribe((data: any) => {
      this.books = data;
    });
  }
}
