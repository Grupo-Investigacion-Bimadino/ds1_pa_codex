import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type Interacciones_ChatbotsDocument = HydratedDocument<Interacciones_Chatbots>;

@Schema()
export class Interacciones_Chatbots {
  @Prop()
  tipo: string;

  @Prop()
  descripcion: string;

  @Prop()
  estado: boolean;

}

export const Interacciones_ChatbotsSchema = SchemaFactory.createForClass(Interacciones_Chatbots);