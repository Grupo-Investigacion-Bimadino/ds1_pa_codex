import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNotificacioneDto } from './dto/create-notificacione.dto';
import { UpdateNotificacioneDto } from './dto/update-notificacione.dto';
import { Notificaciones, NotificacionesDocument } from './schemas/notificaciones.schema';

@Injectable()
export class NotificacionesService {

  constructor(@InjectModel(Notificaciones.name) private notificacionesModel: Model<NotificacionesDocument>) {}

  async create(createNotificacioneDto: CreateNotificacioneDto): Promise<Notificaciones> {
    const createdNotificacion = new this.notificacionesModel(createNotificacioneDto);
    const savedNotificacion = await createdNotificacion.save();
    return savedNotificacion;
  }

  async findAll(): Promise<Notificaciones[]> {
    return this.notificacionesModel.find().exec();
  }

  async findOne(id: string): Promise<Notificaciones | null> {
    return this.notificacionesModel.findById(id).exec();
  }

  async update(id: string, updateNotificacioneDto: UpdateNotificacioneDto): Promise<Notificaciones | null> {
    return this.notificacionesModel.findByIdAndUpdate(id, updateNotificacioneDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any | null> {
    return this.notificacionesModel.findByIdAndDelete(id).exec();
  }  

}
