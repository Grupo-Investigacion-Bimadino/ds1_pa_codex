import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRespuestasComandoDto } from './dto/create-respuestas_comando.dto';
import { UpdateRespuestasComandoDto } from './dto/update-respuestas_comando.dto';
import { Respuestas_Comandos, Respuestas_ComandosDocument } from './schemas/respuestas_comandos.schema';

@Injectable()
export class RespuestasComandosService {

  constructor(@InjectModel(Respuestas_Comandos.name) private respuestasComandosModel: Model<Respuestas_ComandosDocument>) {}

  async create(createRespuestasComandoDto: CreateRespuestasComandoDto): Promise<Respuestas_Comandos> {
    const createdRespuesta = new this.respuestasComandosModel(createRespuestasComandoDto);
    const savedRespuesta = await createdRespuesta.save();
    return savedRespuesta;
  }

  async findAll(): Promise<Respuestas_Comandos[]> {
    return this.respuestasComandosModel.find().exec();
  }

  async findOne(id: string): Promise<Respuestas_Comandos | null> {
    return this.respuestasComandosModel.findById(id).exec();
  }

  async update(id: string, updateRespuestasComandoDto: UpdateRespuestasComandoDto): Promise<Respuestas_Comandos | null> {
    return this.respuestasComandosModel.findByIdAndUpdate(id, updateRespuestasComandoDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any | null> {
    return this.respuestasComandosModel.findByIdAndDelete(id).exec();
  }
}
