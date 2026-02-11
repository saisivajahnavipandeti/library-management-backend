import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {

  constructor(private booksService: BooksService) {}

  // ADMIN + CUSTOMER
  @Get()
  getBooks() {
    return this.booksService.getBooks();
  }

  // ADMIN ONLY (we’ll guard later)
  @Post()
  addBook(@Body() dto: CreateBookDto) {
    return this.booksService.addBook(
      dto.title,
      dto.author
    );
  }

  // CUSTOMER ACTION
  @Post('borrow/:id')
  borrowBook(@Param('id') id: string) {
    return this.booksService.borrowBook(id);
  }
}
