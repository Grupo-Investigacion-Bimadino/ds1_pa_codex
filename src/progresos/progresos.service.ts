import { Injectable } from '@nestjs/common';
import { CreateProgresoDto } from './dto/create-progreso.dto';
import { UpdateProgresoDto } from './dto/update-progreso.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Progresos, ProgresosDocument } from './schemas/progresos.schema';

@Injectable()
export class ProgresosService {

  constructor(@InjectModel(Progresos.name) private progresoModel: Model<ProgresosDocument>) {}

  async create(createProgresoDto: CreateProgresoDto): Promise<Progresos> {
    const createdProgreso = new this.progresoModel(createProgresoDto);
    const savedProgreso = await createdProgreso.save();
 return savedProgreso;
  }

  async findAll(): Promise<Progresos[]> {
 return this.progresoModel.find().exec();
  }

  async findOne(id: string): Promise<Progresos | null> {
 return this.progresoModel.findById(id).exec();
  }

  async update(id: string, updateProgresoDto: UpdateProgresoDto): Promise<Progresos | null> {
 return this.progresoModel.findByIdAndUpdate(id, updateProgresoDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any | null> {
 return this.progresoModel.findByIdAndDelete(id).exec();
  }

}
