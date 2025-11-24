import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EvaluacionesDocument = HydratedDocument<Evaluaciones>;

@Schema()
export class Evaluaciones {
  @Prop()
  titulo: string;

  @Prop()
  descripcion: string;

  @Prop()
  puntaje_maximo: number;
}

export const EvaluacionesSchema = SchemaFactory.createForClass(Evaluaciones);
