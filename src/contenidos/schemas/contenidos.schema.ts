import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContenidosDocument = HydratedDocument<Contenidos>;

@Schema()
export class Contenidos {
  @Prop()
  titulo: string;

  @Prop()
  descripcion: string;

  @Prop()
  URL_recurso: string;

}

export const ContenidosSchema = SchemaFactory.createForClass(Contenidos);