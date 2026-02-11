import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {

  constructor(private booksService: BooksService) {}

  @Get()
  getBooks() {
    return this.booksService.getBooks();
  }

  @Post()
  addBook(@Body() dto: CreateBookDto) {
    return this.booksService.addBook(
      dto.title,
      dto.author
    );
  }

  @Post('borrow/:id')
  borrowBook(@Param('id') id: string) {
    return this.booksService.borrowBook(id);
  }
}
