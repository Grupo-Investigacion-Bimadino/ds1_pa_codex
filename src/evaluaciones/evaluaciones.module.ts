import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EvaluacionesService } from './evaluaciones.service';
import { EvaluacionesController } from './evaluaciones.controller';
import { Evaluaciones, EvaluacionesSchema } from './schemas/evaluaciones.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Evaluaciones.name, schema: EvaluacionesSchema }])],
  controllers: [EvaluacionesController],
  providers: [EvaluacionesService],
})
export class EvaluacionesModule {}
