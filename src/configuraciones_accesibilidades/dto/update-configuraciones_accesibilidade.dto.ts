import { PartialType } from '@nestjs/swagger';
import { CreateConfiguracionesAccesibilidadeDto } from './create-configuraciones_accesibilidade.dto';

export class UpdateConfiguracionesAccesibilidadeDto extends PartialType(CreateConfiguracionesAccesibilidadeDto) {}
