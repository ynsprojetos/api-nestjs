import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Book } from 'src/Mongo/interfaces/book.interface';
import { BooksService } from 'src/Services/books/books.service';

import {bookDTO} from '../../DTO/books.dto'
@Controller('books')
export class BooksController {


constructor( private readonly bookService: BooksService){
 
}

@Get()
async getAllBooks(): Promise<bookDTO[]> {
  return await this.bookService.getAllBooks();
}


@Get("name/:bookName")
async getByNameBook(@Param('bookName') bookName : string): Promise<any[]> {
return await this.bookService.getByNameBook(bookName)
}



@Get(":bookID")
async getBookById(@Param('bookID') bookID: String): Promise<any> {
  return await this.bookService.getBookById(bookID)
}

@Get('author/:authorName')
async getBookByAuthorName(@Param('authorName') authorName: String): Promise<any[]>{
   return await this.bookService.getBookByAuthorName(authorName)
}


@Post()
async saveBook(@Body() newBook: bookDTO): Promise<Book>{
 return await this.bookService.saveBook(newBook);
}

@Patch(':bookID')
async updateBook(@Param('bookID') bookID: String , @Body() newBook: bookDTO): Promise<Book>{
  return await this.bookService.updateBookByID(bookID, newBook)
}

@Delete(':BookID')
async deleteBook(@Param('BookID') BookID: String): Promise<Book>{
return await this.bookService.deleteBookById(BookID)
}
}
