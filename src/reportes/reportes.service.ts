import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { Reportes, ReportesDocument } from './schemas/reportes.schema';

@Injectable()
export class ReportesService {
  constructor(
    @InjectModel(Reportes.name) private reporteModel: Model<ReportesDocument>,
  ) {}

  async create(createReporteDto: CreateReporteDto): Promise<Reportes> {
    const createdReporte = new this.reporteModel(createReporteDto);
    return createdReporte.save();
  }

  async findAll(): Promise<Reportes[]> {
    return this.reporteModel.find().exec();
  }

  async findOne(id: string): Promise<Reportes | null> {
    return this.reporteModel.findById(id).exec();
  }

  async update(id: string, updateReporteDto: UpdateReporteDto,): Promise<Reportes | null> {
    return this.reporteModel
      .findByIdAndUpdate(id, updateReporteDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Reportes | null> {
    return this.reporteModel.findByIdAndDelete(id).exec();
  }
}
