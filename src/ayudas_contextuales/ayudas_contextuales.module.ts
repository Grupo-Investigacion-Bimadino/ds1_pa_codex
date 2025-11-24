import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AyudasContextualesService } from './ayudas_contextuales.service';
import { AyudasContextualesController } from './ayudas_contextuales.controller';
import { Ayudas_contextuales, Ayudas_contextualesSchema } from './schemas/ayudas_contextuales.schema';



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'AyudasContextuales', schema: Ayudas_contextualesSchema }])],
  controllers: [AyudasContextualesController],
  providers: [AyudasContextualesService],
})
export class AyudasContextualesModule {}
