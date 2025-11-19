import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ModulosDocument = HydratedDocument<Modulos>;

@Schema()
export class Modulos {
  @Prop()
  titulo: string;

  @Prop()
  descripcion: string;

  @Prop()
  orden: string;

  @Prop()
  estado: boolean;
}

export const ModulosSchema = SchemaFactory.createForClass(Modulos);
