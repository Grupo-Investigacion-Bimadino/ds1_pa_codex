import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ModulosModule } from './modulos/modulos.module';
import { ActividadesModule } from './actividades/actividades.module';
import { PreguntasModule } from './preguntas/preguntas.module';
import { ComandosModule } from './comandos/comandos.module';
import { RolesModule } from './roles/roles.module';
import { FaqsModule } from './faqs/faqs.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { ReportesModule } from './reportes/reportes.module';
import { IntentosModule } from './intentos/intentos.module';

@Module({
  imports: [UsuariosModule, ModulosModule, ActividadesModule, PreguntasModule, 
    MongooseModule.forRoot('mongodb+srv://itorreglosadiaz_db_user:xhhXLkHUJiALkCOA@cluster0.yknb7it.mongodb.net/server_codex?appName=Cluster0'), ComandosModule, RolesModule, FaqsModule, NotificacionesModule, ReportesModule, IntentosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
