import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SesionesDocument = HydratedDocument<Sesiones>;

@Schema()
export class Sesiones {
  @Prop()
  fecha_inicio: Date;

  @Prop()
  fecha_fin: Date;

  @Prop()
  ip: string;

  @Prop()
  dispositivo: string;
}

export const SesionesSchema = SchemaFactory.createForClass(Sesiones);