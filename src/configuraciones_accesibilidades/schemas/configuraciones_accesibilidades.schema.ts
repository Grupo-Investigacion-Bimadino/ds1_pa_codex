import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type Configuraciones_accesibilidadesDocument = HydratedDocument<Configuraciones_accesibilidades>;

@Schema()
export class Configuraciones_accesibilidades {
  @Prop()
  modo_nocturno: boolean;

  @Prop()
  subtitulos: boolean;

  @Prop()
  lector_pantalla: boolean;

  @Prop()
  controles_audios: string;
  
}

export const Configuraciones_accesibilidadesSchema = SchemaFactory.createForClass(Configuraciones_accesibilidades);
