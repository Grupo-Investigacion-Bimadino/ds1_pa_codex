import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfiguracionesAccesibilidadesService } from './configuraciones_accesibilidades.service';
import { ConfiguracionesAccesibilidadesController } from './configuraciones_accesibilidades.controller';
import { Configuraciones_accesibilidades, Configuraciones_accesibilidadesSchema } from './schemas/configuraciones_accesibilidades.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Configuraciones_accesibilidades.name, schema: Configuraciones_accesibilidadesSchema }])],
  controllers: [ConfiguracionesAccesibilidadesController],
  providers: [ConfiguracionesAccesibilidadesService],
})
export class ConfiguracionesAccesibilidadesModule {}
