import { PartialType } from '@nestjs/swagger';
import { CreateIntentoDto } from './create-intento.dto';

export class UpdateIntentoDto extends PartialType(CreateIntentoDto) {}
