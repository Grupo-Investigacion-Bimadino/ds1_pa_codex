import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProgresosDocument = HydratedDocument<Progresos>;

@Schema()
export class Progresos {
  @Prop()
  enuncicado: string;

  @Prop()
  tipo: string;
}

export const ProgresosSchema = SchemaFactory.createForClass(Progresos);
