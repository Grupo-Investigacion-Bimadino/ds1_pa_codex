import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PreguntasDocument = HydratedDocument<Preguntas>;

@Schema()
export class Preguntas {
  @Prop()
  enuncicado: string;

  @Prop()
  tipo: string;
}

export const PreguntasSchema = SchemaFactory.createForClass(Preguntas);
