import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComandosService } from './comandos.service';
import { ComandosController } from './comandos.controller';
import { Comandos, ComandosSchema } from './schemas/comandos.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Comandos.name, schema: ComandosSchema }])],
  controllers: [ComandosController],
  providers: [ComandosService],
})
export class ComandosModule {}
