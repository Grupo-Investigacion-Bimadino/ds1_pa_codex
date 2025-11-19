import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportesService } from './reportes.service';
import { ReportesController } from './reportes.controller';
import { Reportes, ReportesSchema } from './schemas/reportes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Reportes.name, schema: ReportesSchema }]),
  ],  
  controllers: [ReportesController],
  providers: [ReportesService],
})
export class ReportesModule {}
