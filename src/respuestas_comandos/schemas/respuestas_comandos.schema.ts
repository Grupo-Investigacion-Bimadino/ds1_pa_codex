import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type Respuestas_ComandosDocument = HydratedDocument<Respuestas_Comandos>;

@Schema()
export class Respuestas_Comandos {
  @Prop()
  salida_esperada: string;

  @Prop()
  explicacion: string;

}

export const Respuestas_ComandosSchema = SchemaFactory.createForClass(Respuestas_Comandos);