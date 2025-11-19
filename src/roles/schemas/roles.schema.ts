import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RolesDocument = HydratedDocument<Roles>;

@Schema()
export class Roles {
  @Prop()
  nombre: string;

  @Prop()
  descripcion: string;
}

export const RolesSchema = SchemaFactory.createForClass(Roles);
