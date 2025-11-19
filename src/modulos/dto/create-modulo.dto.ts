import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class CreateModuloDto {
  @IsNumber()
  @IsNotEmpty()
  titulo: number;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  orden: string;

  @IsBoolean()
  @IsNotEmpty()
  estado: boolean;
}
