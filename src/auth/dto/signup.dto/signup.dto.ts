import { IsString, MinLength, IsIn } from 'class-validator';

export class SignupDto {

  @IsString()
  username: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsIn(['admin', 'customer'])
  role: 'admin' | 'customer';
}
