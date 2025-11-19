import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReportesDocument = HydratedDocument<Reportes>;

@Schema()
export class Reportes {
  @Prop()
  tipo: string;

  @Prop()
  ruta_archivo: string;

  @Prop()
  fecha_generacion: Date;
}

export const ReportesSchema = SchemaFactory.createForClass(Reportes);