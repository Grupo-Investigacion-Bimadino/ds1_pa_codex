import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type IntentosDocument = HydratedDocument<Intentos>;

@Schema()
export class Intentos {
  @Prop()
  fecha: Date;

  @Prop()
  puntaje_obtenido: number;

}

export const IntentosSchema = SchemaFactory.createForClass(Intentos);
