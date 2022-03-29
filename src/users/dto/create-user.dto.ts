import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@mail.ru',
    description: 'Почтовый ящик',
  })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Некоректный email' })
  readonly email: string;
  @ApiProperty({
    example: '123456',
    description: 'Пароль',
  })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 14, { message: 'Не меньше 4 и не больше 14 символов' })
  readonly password: string;
}
