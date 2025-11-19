import { IsString, IsNotEmpty, IsEmail, IsBoolean, IsDate, IsOptional } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsString()
  @IsNotEmpty()
  rol: string;

  @IsBoolean()
  @IsNotEmpty()
  estado: boolean;

  @IsDate()
  @IsOptional()
  fecha?: Date;

  @IsString()
  @IsNotEmpty()
  contraseña: string;
}
