import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { release } from "os";
import { bookDTO } from "src/DTO/books.dto";
import { Book } from "../interfaces/book.interface";

@Injectable()
export class BookRepository {

constructor(
 @InjectModel('book') private readonly bookModel: Model<Book>
  
){}

async saveBook(newBook: bookDTO): Promise<any> {
const savedBook = new this.bookModel(newBook)
return await savedBook.save()
}

async getAllBooks(): Promise<any[]> {
  return await this.bookModel.find({}).sort({name: +1}).exec();
}

async getBookById(bookID: String): Promise<any>{
 return await this.bookModel.findById(bookID)
}

async getBookByAuthorName(authorName: String[]): Promise<any[]> {
  return await this.bookModel.find({
    $or : [
      {"author.name" : { $in : authorName}},
      {"author.surname" : {$in : authorName}}
    ]
  })
}

async deleteBookById(bookID: any): Promise<Book>{
  
  return await this.bookModel.findOneAndDelete({_id: bookID})
}


async updateBookByID(bookID:any, newBook: any): Promise<Book> {
  return await this.bookModel.replaceOne({_id: bookID}, newBook)
}

async getByNameBook(nameBook: string): Promise<any[]> {
  return await this.bookModel.find({
    name : {'$regex': `${nameBook}` , '$options' : 'i'}
  });
}


}