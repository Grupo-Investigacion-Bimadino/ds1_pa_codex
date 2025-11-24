import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type Integraciones_externasDocument = HydratedDocument<Integraciones_externas>;

@Schema()
export class Integraciones_externas {
  @Prop()
  tipo: string;

  @Prop()
  descripcion: string;

  @Prop()
  estado: boolean;

}

export const Integraciones_externasSchema = SchemaFactory.createForClass(Integraciones_externas);
