import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ResultadosDocument = HydratedDocument<Resultados>;

@Schema()
export class Resultados {
  @Prop()
  calificacion: number;

  @Prop()
  fecha_realizacion: Date;

  @Prop()
  estado: boolean;
  
}

export const ResultadosSchema = SchemaFactory.createForClass(Resultados);
