import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
import { Preguntas, PreguntasDocument } from './schemas/preguntas.schema'; 


@Injectable()
export class PreguntasService {

  constructor(@InjectModel(Preguntas.name) private preguntaModel: Model<PreguntasDocument>) {}

async create(createPreguntasDto: CreatePreguntaDto): Promise<Preguntas> {
    const createdPreguntas = new this.preguntaModel(createPreguntasDto);
    const savedPreguntas = await createdPreguntas.save();
    return savedPreguntas;
  }

  async findAll(): Promise<Preguntas[]> {
    return this.preguntaModel.find().exec();
  }

  async findOne(id: string): Promise<Preguntas | null> {
    return this.preguntaModel.findById(id).exec();
  }

  async update(id: string, updatePreguntasDto: UpdatePreguntaDto): Promise<Preguntas | null> {
    return this.preguntaModel.findByIdAndUpdate(id, updatePreguntasDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any | null> {
    return this.preguntaModel.findByIdAndDelete(id).exec();
  }  
  
}
