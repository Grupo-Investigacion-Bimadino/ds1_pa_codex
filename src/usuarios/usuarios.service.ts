import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuarios, UsuariosDocument } from './schemas/usuarios.schema'; 


@Injectable()
export class UsuariosService {
  
  constructor(@InjectModel(Usuarios.name) private usuarioModel: Model<UsuariosDocument>) {}

  async create(createUsuariosDto: CreateUsuarioDto): Promise<Usuarios> {
    const createdUsuarios = new this.usuarioModel(createUsuariosDto);
    const savedUsuarios = await createdUsuarios.save();
    return savedUsuarios;
  }

  async findAll(): Promise<Usuarios[]> {
    return this.usuarioModel.find().exec();
  }

  async findOne(id: string): Promise<Usuarios | null> {
    return this.usuarioModel.findById(id).exec();
  }

  async update(id: string, updateUsuariosDto: UpdateUsuarioDto): Promise<Usuarios | null> {
    return this.usuarioModel.findByIdAndUpdate(id, updateUsuariosDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any | null> {
    return this.usuarioModel.findByIdAndDelete(id).exec();
  }
}

