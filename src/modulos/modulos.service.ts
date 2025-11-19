import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';
import { Modulos, ModulosDocument } from './schemas/modulos.schema'; 


@Injectable()
export class ModulosService {

  constructor(@InjectModel(Modulos.name) private moduloModel: Model<ModulosDocument>) {}

  async create(createModulosDto: CreateModuloDto): Promise<Modulos> {
    const createdModulos = new this.moduloModel(createModulosDto);
    const savedModulos = await createdModulos.save();
    return savedModulos;
  }

  async findAll(): Promise<Modulos[]> {
    return this.moduloModel.find().exec();
  }

  async findOne(id: string): Promise<Modulos | null> {
    return this.moduloModel.findById(id).exec();
  }

  async update(id: string, updateModulosDto: UpdateModuloDto): Promise<Modulos | null> {
    return this.moduloModel.findByIdAndUpdate(id, updateModulosDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any | null> {
    return this.moduloModel.findByIdAndDelete(id).exec();
  }

}


