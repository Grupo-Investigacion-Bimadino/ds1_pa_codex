import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContenidoDto } from './dto/create-contenido.dto';
import { UpdateContenidoDto } from './dto/update-contenido.dto';
import { Contenidos, ContenidosDocument } from './schemas/contenidos.schema';

@Injectable()
export class ContenidosService {

  constructor(@InjectModel(Contenidos.name) private contenidoModel: Model<ContenidosDocument>) {}

  async create(createContenidoDto: CreateContenidoDto): Promise<Contenidos> {
    const createdContenido = new this.contenidoModel(createContenidoDto);
    const savedContenido = await createdContenido.save();
    return savedContenido;
  }

  async findAll(): Promise<Contenidos[]> {
    return this.contenidoModel.find().exec();
  }

  async findOne(id: string): Promise<Contenidos | null> {
    return this.contenidoModel.findById(id).exec();
  }

  async update(id: string, updateContenidoDto: UpdateContenidoDto): Promise<Contenidos | null> {
    return this.contenidoModel.findByIdAndUpdate(id, updateContenidoDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any | null> {
    return this.contenidoModel.findByIdAndDelete(id).exec();
  }
}