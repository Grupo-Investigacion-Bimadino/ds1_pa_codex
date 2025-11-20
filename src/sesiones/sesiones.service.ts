import { Injectable } from '@nestjs/common';
import { CreateSesioneDto } from './dto/create-sesione.dto';
import { UpdateSesioneDto } from './dto/update-sesione.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sesiones, SesionesDocument } from './schemas/sesiones.schema';

@Injectable()
export class SesionesService {

 constructor(@InjectModel(Sesiones.name) private sesionesModel: Model<SesionesDocument>) {}

 async create(createSesioneDto: CreateSesioneDto): Promise<Sesiones> {
 const createdSesion = new this.sesionesModel(createSesioneDto);
 const savedSesion = await createdSesion.save();
 return savedSesion;
  }

 async findAll(): Promise<Sesiones[]> {
 return this.sesionesModel.find().exec();
  }

 async findOne(id: string): Promise<Sesiones | null> {
 return this.sesionesModel.findById(id).exec();
  }

 async update(id: string, updateSesioneDto: UpdateSesioneDto): Promise<Sesiones | null> {
 return this.sesionesModel.findByIdAndUpdate(id, updateSesioneDto, { new: true }).exec();
  }

 async remove(id: string): Promise<any | null> {
 return this.sesionesModel.findByIdAndDelete(id).exec();
  }  
}