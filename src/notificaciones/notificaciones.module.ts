import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificacionesService } from './notificaciones.service';
import { NotificacionesController } from './notificaciones.controller';
import { Notificaciones, NotificacionesSchema } from './schemas/notificaciones.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Notificaciones.name, schema: NotificacionesSchema }])
  ],
  controllers: [NotificacionesController],
  providers: [NotificacionesService],
})
export class NotificacionesModule {}
