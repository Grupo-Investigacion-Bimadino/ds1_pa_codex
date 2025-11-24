import { Injectable } from '@nestjs/common';
import { CreateConfiguracionesAccesibilidadeDto } from './dto/create-configuraciones_accesibilidade.dto';
import { UpdateConfiguracionesAccesibilidadeDto } from './dto/update-configuraciones_accesibilidade.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Configuraciones_accesibilidades, Configuraciones_accesibilidadesDocument } from './schemas/configuraciones_accesibilidades.schema';

@Injectable()
export class ConfiguracionesAccesibilidadesService {

 constructor(@InjectModel(Configuraciones_accesibilidades.name) private configuracionesAccesibilidadesModel: Model<Configuraciones_accesibilidadesDocument>) {}

 async create(createConfiguracionesAccesibilidadeDto: CreateConfiguracionesAccesibilidadeDto): Promise<Configuraciones_accesibilidades> {
 const createdConfiguracionesAccesibilidades = new this.configuracionesAccesibilidadesModel(createConfiguracionesAccesibilidadeDto);
 return createdConfiguracionesAccesibilidades.save();
  }

 async findAll(): Promise<Configuraciones_accesibilidades[]> {
 return this.configuracionesAccesibilidadesModel.find().exec();
  }

 async findOne(id: string): Promise<Configuraciones_accesibilidades | null> {
 return this.configuracionesAccesibilidadesModel.findById(id).exec();
  }

 async update(id: string, updateConfiguracionesAccesibilidadeDto: UpdateConfiguracionesAccesibilidadeDto): Promise<Configuraciones_accesibilidades | null> {
 return this.configuracionesAccesibilidadesModel.findByIdAndUpdate(id, updateConfiguracionesAccesibilidadeDto, { new: true }).exec();
  }

 async remove(id: string): Promise<any | null> {
 return this.configuracionesAccesibilidadesModel.findByIdAndDelete(id).exec();
  }
}
