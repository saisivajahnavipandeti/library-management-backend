import { IsString, MinLength } from 'class-validator';

export class CreateBookDto {

  @IsString()
  @MinLength(2)
  title: string;

  @IsString()
  @MinLength(2)
  author: string;
}
