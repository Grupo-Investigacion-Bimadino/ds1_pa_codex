import { Injectable } from '@nestjs/common';
import { CreateAyudasContextualeDto } from './dto/create-ayudas_contextuale.dto';
import { UpdateAyudasContextualeDto } from './dto/update-ayudas_contextuale.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ayudas_contextuales, Ayudas_contextualesDocument } from './schemas/ayudas_contextuales.schema';

@Injectable()
export class AyudasContextualesService {

 constructor(@InjectModel(Ayudas_contextuales.name) private ayudasContextualesModel: Model<Ayudas_contextualesDocument>) {}

 async create(createAyudasContextualeDto: CreateAyudasContextualeDto): Promise<Ayudas_contextuales> {
 const createdAyudasContextuales = new this.ayudasContextualesModel(createAyudasContextualeDto);
 const savedAyudasContextuales = await createdAyudasContextuales.save();
 return savedAyudasContextuales;
  }

 async findAll(): Promise<Ayudas_contextuales[]> {
 return this.ayudasContextualesModel.find().exec();
  }

 async findOne(id: string): Promise<Ayudas_contextuales | null> {
 return this.ayudasContextualesModel.findById(id).exec();
  }

 async update(id: string, updateAyudasContextualeDto: UpdateAyudasContextualeDto): Promise<Ayudas_contextuales | null> {
 return this.ayudasContextualesModel.findByIdAndUpdate(id, updateAyudasContextualeDto, { new: true }).exec();
  }

 async remove(id: string): Promise<any | null> {
 return this.ayudasContextualesModel.findByIdAndDelete(id).exec();
  }
}
