import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type Ayudas_contextualesDocument = HydratedDocument<Ayudas_contextuales>;

@Schema()
export class Ayudas_contextuales {
  @Prop()
  salida_esperada: string;

  @Prop()
  explicacion: string;
}

export const Ayudas_contextualesSchema = SchemaFactory.createForClass(Ayudas_contextuales);
