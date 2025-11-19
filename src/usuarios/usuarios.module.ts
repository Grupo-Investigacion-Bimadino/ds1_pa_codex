import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuarios, UsuariosSchema } from './schemas/usuarios.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Usuarios.name, schema: UsuariosSchema }])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
