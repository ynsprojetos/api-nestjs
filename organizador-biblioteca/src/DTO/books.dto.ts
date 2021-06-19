import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength } from "class-validator";
import {AuthorDTO} from './author.dto'
export class bookDTO {

   @IsNotEmpty()
   @IsString()
   @MinLength(2)
   @MaxLength(100)
   readonly name: String;
    
   @IsNotEmpty()
   @Type(() => AuthorDTO ) 
   readonly author: AuthorDTO[]

   @IsNotEmpty()
   @IsString()
   @MinLength(2)
   @MaxLength(100)
   readonly language: String;
   
   @IsNotEmpty()
   @IsNumber()
   @IsPositive()
   readonly releaseYear: Number;

   @IsNotEmpty()
   @IsString()
   @MinLength(2)
   @MaxLength(100)
   readonly publichser: String;
   
   @IsNotEmpty()
   @IsNumber()
   @IsPositive()
   readonly pages: Number;
}