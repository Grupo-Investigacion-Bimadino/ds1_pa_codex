import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateComandoDto } from './dto/create-comando.dto';
import { UpdateComandoDto } from './dto/update-comando.dto';
import { Comandos, ComandosDocument } from './schemas/comandos.schema';

@Injectable()
export class ComandosService {

  constructor(@InjectModel(Comandos.name) private comandoModel: Model<ComandosDocument>) {}

  async create(createComandoDto: CreateComandoDto): Promise<Comandos> {
    const createdComando = new this.comandoModel(createComandoDto);
    const savedComando = await createdComando.save();
    return savedComando;
  }

  async findAll(): Promise<Comandos[]> {
    return this.comandoModel.find().exec();
  }

  async findOne(id: string): Promise<Comandos | null> {
    return this.comandoModel.findById(id).exec();
  }

  async update(id: string, updateComandoDto: UpdateComandoDto): Promise<Comandos | null> {
    return this.comandoModel.findByIdAndUpdate(id, updateComandoDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any | null> {
    return this.comandoModel.findByIdAndDelete(id).exec();
  }
}
