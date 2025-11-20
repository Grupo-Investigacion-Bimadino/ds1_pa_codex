import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SesionesService } from './sesiones.service';
import { SesionesController } from './sesiones.controller';
import { Sesiones, SesionesSchema } from './schemas/sesiones.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sesiones.name, schema: SesionesSchema }]),
  ],
  controllers: [SesionesController],
  providers: [SesionesService],
})
export class SesionesModule {}
