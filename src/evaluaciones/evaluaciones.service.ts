import { Injectable } from '@nestjs/common';
import { CreateEvaluacioneDto } from './dto/create-evaluacione.dto';
import { UpdateEvaluacioneDto } from './dto/update-evaluacione.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Evaluaciones, EvaluacionesDocument } from './schemas/evaluaciones.schema';

@Injectable()
export class EvaluacionesService {

 constructor(@InjectModel(Evaluaciones.name) private evaluacionesModel: Model<EvaluacionesDocument>) {}

  async create(createEvaluacioneDto: CreateEvaluacioneDto): Promise<Evaluaciones> {
 const createdEvaluacion = new this.evaluacionesModel(createEvaluacioneDto);
 return createdEvaluacion.save();
  }

  async findAll(): Promise<Evaluaciones[]> {
 return this.evaluacionesModel.find().exec();
  }

  async findOne(id: string): Promise<Evaluaciones | null> {
 return this.evaluacionesModel.findById(id).exec();
  }

  async update(id: string, updateEvaluacioneDto: UpdateEvaluacioneDto): Promise<Evaluaciones | null> {
 return this.evaluacionesModel.findByIdAndUpdate(id, updateEvaluacioneDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any> {
 return this.evaluacionesModel.findByIdAndDelete(id).exec();
  }

}
