import { PartialType } from '@nestjs/swagger';
import { CreateRespuestasComandoDto } from './create-respuestas_comando.dto';

export class UpdateRespuestasComandoDto extends PartialType(CreateRespuestasComandoDto) {}
