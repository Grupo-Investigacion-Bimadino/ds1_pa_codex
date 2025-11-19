import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NotificacionesDocument = HydratedDocument<Notificaciones>;

@Schema()
export class Notificaciones {
  @Prop()
  contenido: string;

  @Prop()
  fecha_envio: Date;

  @Prop()
  estado: boolean;
}

export const NotificacionesSchema = SchemaFactory.createForClass(Notificaciones);