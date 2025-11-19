import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIntentoDto } from './dto/create-intento.dto';
import { UpdateIntentoDto } from './dto/update-intento.dto';
import { Intentos, IntentosDocument } from './schemas/intentos.schema';

@Injectable()
export class IntentosService {

  constructor(@InjectModel(Intentos.name) private intentosModel: Model<IntentosDocument>) {}

  async create(createIntentoDto: CreateIntentoDto): Promise<Intentos> {
    const createdIntento = new this.intentosModel(createIntentoDto);
    const savedIntento = await createdIntento.save();
    return savedIntento;
  }

  async findAll(): Promise<Intentos[]> {
    return this.intentosModel.find().exec();
  }

  async findOne(id: string): Promise<Intentos | null> {
    return this.intentosModel.findById(id).exec();
  }

  async update(id: string, updateIntentoDto: UpdateIntentoDto): Promise<Intentos | null> {
    return this.intentosModel.findByIdAndUpdate(id, updateIntentoDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any | null> {
    return this.intentosModel.findByIdAndDelete(id).exec();
  }
}
