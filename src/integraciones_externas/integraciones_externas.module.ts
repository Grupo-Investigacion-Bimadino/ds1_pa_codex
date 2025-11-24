import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IntegracionesExternasService } from './integraciones_externas.service';
import { IntegracionesExternasController } from './integraciones_externas.controller';
import { Integraciones_externas, Integraciones_externasSchema } from './schemas/integraciones_externas.schema';

@Module({
  imports: [    MongooseModule.forFeature([{ name: Integraciones_externas.name, schema: Integraciones_externasSchema }])],

  controllers: [IntegracionesExternasController],
  providers: [IntegracionesExternasService],
})
export class IntegracionesExternasModule {}
