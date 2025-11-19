import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FaqsDocument = HydratedDocument<Faqs>;

@Schema()
export class Faqs {
  @Prop()
  pregunta: string;

  @Prop()
  respuesta: string; 

  @Prop()
  categoria: string;
}

export const FaqsSchema = SchemaFactory.createForClass(Faqs);