import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 
import { CreateActividadeDto } from './dto/create-actividade.dto';
import { UpdateActividadeDto } from './dto/update-actividade.dto';
import { Actividades, ActividadesDocument } from './schemas/actividades.schema'; 


@Injectable()
export class ActividadesService {

  constructor(@InjectModel(Actividades.name) private actividadModel: Model<ActividadesDocument>) {}

  async create(createActividadeDto: CreateActividadeDto): Promise<Actividades> {
    const createdActividades = new this.actividadModel(createActividadeDto);
    const savedActividades = await createdActividades.save();
    return savedActividades;
  }

  async findAll(): Promise<Actividades[]> {
    return this.actividadModel.find().exec();
  }

  async findOne(id: string): Promise<Actividades | null> {
    return this.actividadModel.findById(id).exec();
  }

  async update(id: string, updateActividadeDto: UpdateActividadeDto): Promise<Actividades | null> {
    return this.actividadModel.findByIdAndUpdate(id, updateActividadeDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any | null> {
    return this.actividadModel.findByIdAndDelete(id).exec();
  }

}
