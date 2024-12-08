// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { BooksComponent } from './books.component';

// describe('BooksComponent', () => {
//   let component: BooksComponent;
//   let fixture: ComponentFixture<BooksComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [BooksComponent],
//     }).compileComponents();

//     fixture = TestBed.createComponent(BooksComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should display "No books available" if books list is empty', () => {
//     component.books = [];
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('p')?.textContent).toContain('No books available');
//   });

//   it('should display book titles when books are available', () => {
//     component.books = [{ coverImageUrl: '', title: 'Test Book' }];
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('h2')?.textContent).toContain('Test Book');
//   });
// });

import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  // Definindo a propriedade books como um array de objetos
  books: { coverImageUrl: string; title: string }[] = [];
}
