import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultadosService } from './resultados.service';
import { ResultadosController } from './resultados.controller';
import { Resultados, ResultadosSchema } from './schemas/resultados.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Resultados.name, schema: ResultadosSchema }]),
    ],
  controllers: [ResultadosController],
  providers: [ResultadosService],
})
export class ResultadosModule {}
