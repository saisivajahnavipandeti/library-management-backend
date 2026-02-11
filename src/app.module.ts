import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    AuthModule, // 👈 IF THIS IS MISSING, NOTHING WORKS
    BooksModule
  ],
})
export class AppModule {}
