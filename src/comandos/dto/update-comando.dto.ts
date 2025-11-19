import { PartialType } from '@nestjs/swagger';
import { CreateComandoDto } from './create-comando.dto';

export class UpdateComandoDto extends PartialType(CreateComandoDto) {}
