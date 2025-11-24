import { Injectable } from '@nestjs/common';
import { CreateIntegracionesExternaDto } from './dto/create-integraciones_externa.dto';
import { UpdateIntegracionesExternaDto } from './dto/update-integraciones_externa.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Integraciones_externas, Integraciones_externasDocument } from './schemas/integraciones_externas.schema';

@Injectable()
export class IntegracionesExternasService {

  constructor(@InjectModel(Integraciones_externas.name) private integracionesExternasModel: Model<Integraciones_externasDocument>) {}

  async create(createIntegracionesExternaDto: CreateIntegracionesExternaDto): Promise<Integraciones_externas> {
    const createdIntegracionExterna = new this.integracionesExternasModel(createIntegracionesExternaDto);
    const savedIntegracionExterna = await createdIntegracionExterna.save();
 return savedIntegracionExterna;
  }

  async findAll(): Promise<Integraciones_externas[]> {
    return this.integracionesExternasModel.find().exec();
  }

  async findOne(id: string): Promise<Integraciones_externas | null> {
    return this.integracionesExternasModel.findById(id).exec();
  }

  async update(id: string, updateIntegracionesExternaDto: UpdateIntegracionesExternaDto): Promise<Integraciones_externas | null> {
    return this.integracionesExternasModel.findByIdAndUpdate(id, updateIntegracionesExternaDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any> {
    return this.integracionesExternasModel.findByIdAndDelete(id).exec();
  }
}
