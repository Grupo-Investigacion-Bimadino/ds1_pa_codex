import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActividadesService } from './actividades.service';
import { ActividadesController } from './actividades.controller';
import { Actividades, ActividadesSchema } from './schemas/actividades.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Actividades.name, schema: ActividadesSchema }])],
  controllers: [ActividadesController],
  providers: [ActividadesService],
})
export class ActividadesModule {}
