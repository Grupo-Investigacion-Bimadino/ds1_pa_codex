import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FaqsService } from './faqs.service';
import { FaqsController } from './faqs.controller';
import { Faqs, FaqsSchema } from './schemas/faqs.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Faqs.name, schema: FaqsSchema }])],
  controllers: [FaqsController],
  providers: [FaqsService],
})
export class FaqsModule {}
