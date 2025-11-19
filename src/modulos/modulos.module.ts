import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModulosService } from './modulos.service';
import { ModulosController } from './modulos.controller';
import { Modulos, ModulosSchema } from './schemas/modulos.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Modulos.name, schema: ModulosSchema }])],
  controllers: [ModulosController],
  providers: [ModulosService],
})
export class ModulosModule {}
