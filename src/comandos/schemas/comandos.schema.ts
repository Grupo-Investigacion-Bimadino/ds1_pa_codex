import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ComandosDocument = HydratedDocument<Comandos>;

@Schema()
export class Comandos {
  @Prop()
  instruccion: string;

  @Prop()
  descripcion: string;

  @Prop()
  categoria: string;

}

export const ComandosSchema = SchemaFactory.createForClass(Comandos);