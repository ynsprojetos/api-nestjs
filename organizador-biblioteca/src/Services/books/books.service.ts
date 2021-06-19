import { BadRequestException, Injectable } from '@nestjs/common';
import { bookDTO } from 'src/DTO/books.dto';
import { Book } from 'src/Mongo/interfaces/book.interface';
import { BookRepository } from 'src/Mongo/repository/book.repository';

@Injectable()
export class BooksService {

constructor(
  private readonly bookRepository: BookRepository
){}

  async saveBook(newBook: bookDTO): Promise<Book> {
    
     return await this.bookRepository.saveBook(newBook)
  }

  async getAllBooks(): Promise<bookDTO[]> {
  const allBooks = await this.bookRepository.getAllBooks()
  if(!allBooks.length){

    throw new BadRequestException("nenhum livro encontrado!")
  }
  return allBooks
  }

  async getBookById(bookID: String): Promise<Book> {
 try {
   return await this.bookRepository.getBookById(bookID);
 } catch (error) {
   throw new BadRequestException("livro nao encontrado por ID")
 }

  }

  async getByNameBook(bookName: string): Promise<any[]>{
    const foundBooks = await this.bookRepository.getByNameBook(bookName)

    if(!foundBooks.length){
     throw new BadRequestException('NENHUM RESULTADO ENCONTRADO PARA ESSE NOME!')
    }
      return foundBooks
  }
    
  

  async getBookByAuthorName(authorName: String): Promise<any[]>{
    const splitedAuthorName = authorName.split(' ')
    const foundBooks = await this.bookRepository.getBookByAuthorName(splitedAuthorName)

    if(!foundBooks.length){
     throw new BadRequestException('NENHUM RESULTADO ENCONTRADO PARA ESSE AUTOR!')
    }
      return foundBooks
  }

  async deleteBookById(bookID:String): Promise<Book> {
    try {
     return await this.bookRepository.deleteBookById(bookID)
    } catch (error) {
      throw new BadRequestException("o livro nao pode ser deletado, pois o mesmo nao foi encontrado!")
    }
   
  }

  async updateBookByID(bookID: String, newBook: bookDTO): Promise<Book> {
    return await this.bookRepository.updateBookByID(bookID, newBook)
  }

  
}
