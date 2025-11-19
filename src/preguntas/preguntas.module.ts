import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PreguntasService } from './preguntas.service';
import { PreguntasController } from './preguntas.controller';
import { Preguntas, PreguntasSchema } from './schemas/preguntas.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Preguntas.name, schema: PreguntasSchema }])],
  controllers: [PreguntasController],
  providers: [PreguntasService],
})
export class PreguntasModule {}
