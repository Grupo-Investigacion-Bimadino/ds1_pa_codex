import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsuariosDocument = HydratedDocument<Usuarios>;

@Schema()
export class Usuarios {
  @Prop()
  name: string;

  @Prop()
  apellido: string;

  @Prop()
  correo: string;

  @Prop()
  rol: string;

  @Prop()
  estado: boolean;

  @Prop()
  fecha: Date;

  @Prop()
  contraseña: string;
}

export const UsuariosSchema = SchemaFactory.createForClass(Usuarios);
