import { books } from '../memory.store';
import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {

  addBook(title: string, author: string) {
    const id = randomUUID();

    books.set(id, {
      id,
      title,
      author,
      available: true
    });

    return books.get(id);
  }

  getBooks() {
    return Array.from(books.values());
  }

  borrowBook(id: string) {
    const book = books.get(id);

    if (!book || !book.available) {
      throw new Error('Not available');
    }

    book.available = false;
    return book;
  }
}
