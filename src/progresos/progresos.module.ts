import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgresosService } from './progresos.service';
import { ProgresosController } from './progresos.controller';
import { Progresos, ProgresosSchema } from './schemas/progresos.schema';



@Module({
  imports: [
    MongooseModule.forFeature([{ name: Progresos.name, schema: ProgresosSchema }]),
  ],
  controllers: [ProgresosController],
  providers: [ProgresosService],
})
export class ProgresosModule {}
