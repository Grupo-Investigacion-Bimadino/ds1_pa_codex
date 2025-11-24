import { PartialType } from '@nestjs/swagger';
import { CreateIntegracionesExternaDto } from './create-integraciones_externa.dto';

export class UpdateIntegracionesExternaDto extends PartialType(CreateIntegracionesExternaDto) {}
