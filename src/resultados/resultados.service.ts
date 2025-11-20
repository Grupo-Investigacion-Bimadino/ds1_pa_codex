import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { Resultados, ResultadosDocument } from './schemas/resultados.schema';

@Injectable()
export class ResultadosService {
  constructor(
    @InjectModel(Resultados.name) private resultadosModel: Model<ResultadosDocument>,
  ) {}

  async create(createResultadoDto: CreateResultadoDto): Promise<Resultados> {
    const createdResultado = new this.resultadosModel(createResultadoDto);
    return createdResultado.save();
  }

  async findAll(): Promise<Resultados[]> {
    return this.resultadosModel.find().exec();
  }

  async findOne(id: string): Promise<Resultados | null> {
    return this.resultadosModel.findById(id).exec();
  }

  async update(id: string, updateResultadoDto: UpdateResultadoDto,): Promise<Resultados | null> {
    return this.resultadosModel
      .findByIdAndUpdate(id, updateResultadoDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Resultados | null> {
    return this.resultadosModel.findByIdAndDelete(id).exec();
  }
}
