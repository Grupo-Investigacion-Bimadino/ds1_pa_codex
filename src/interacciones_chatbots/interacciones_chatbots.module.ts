import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InteraccionesChatbotsService } from './interacciones_chatbots.service';
import { InteraccionesChatbotsController } from './interacciones_chatbots.controller';
import { Interacciones_Chatbots, Interacciones_ChatbotsSchema } from './schemas/interacciones_chatbots.schema';

@Module({
  imports: [    MongooseModule.forFeature([{ name: Interacciones_Chatbots.name, schema: Interacciones_ChatbotsSchema }])],

  controllers: [InteraccionesChatbotsController],
  providers: [InteraccionesChatbotsService],
})
export class InteraccionesChatbotsModule {}
