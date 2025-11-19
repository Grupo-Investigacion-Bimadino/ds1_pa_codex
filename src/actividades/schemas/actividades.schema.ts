import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ActividadesDocument = HydratedDocument<Actividades>;

@Schema()
export class Actividades {
  @Prop()
  titulo: string;

  @Prop()
  descripcion: string;

  @Prop()
  tipo: string;

  @Prop()
  dificultad: string;
  
}

export const ActividadesSchema = SchemaFactory.createForClass(Actividades);
