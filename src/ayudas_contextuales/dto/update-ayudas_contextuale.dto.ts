import { PartialType } from '@nestjs/swagger';
import { CreateAyudasContextualeDto } from './create-ayudas_contextuale.dto';

export class UpdateAyudasContextualeDto extends PartialType(CreateAyudasContextualeDto) {}
