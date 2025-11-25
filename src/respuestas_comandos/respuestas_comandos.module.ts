import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RespuestasComandosService } from './respuestas_comandos.service';
import { RespuestasComandosController } from './respuestas_comandos.controller';
import { Respuestas_Comandos, Respuestas_ComandosSchema } from './schemas/respuestas_comandos.schema';

@Module({ 
  imports: [MongooseModule.forFeature([{ name: Respuestas_Comandos.name, schema: Respuestas_ComandosSchema }])],
  controllers: [RespuestasComandosController],
  providers: [RespuestasComandosService],
})
export class RespuestasComandosModule {}
