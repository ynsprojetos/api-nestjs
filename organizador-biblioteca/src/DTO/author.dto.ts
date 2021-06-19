import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class AuthorDTO {
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(10)
  readonly name: String;
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(10)
  readonly surname: String;
}