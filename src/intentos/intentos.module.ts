import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IntentosService } from './intentos.service';
import { IntentosController } from './intentos.controller';
import { Intentos, IntentosSchema } from './schemas/intentos.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Intentos.name, schema: IntentosSchema }])],
  controllers: [IntentosController],
  providers: [IntentosService],
})
export class IntentosModule {}
