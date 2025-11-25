import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Interacciones_Chatbots, Interacciones_ChatbotsDocument } from './schemas/interacciones_chatbots.schema';
import { CreateInteraccionesChatbotDto } from './dto/create-interacciones_chatbot.dto';
import { UpdateInteraccionesChatbotDto } from './dto/update-interacciones_chatbot.dto';

@Injectable()
export class InteraccionesChatbotsService {

  constructor(@InjectModel(Interacciones_Chatbots.name) private interaccionesChatbotsModel: Model<Interacciones_ChatbotsDocument>) {}

  async create(createInteraccionesChatbotDto: CreateInteraccionesChatbotDto): Promise<Interacciones_Chatbots> {
    const createdInteraccion = new this.interaccionesChatbotsModel(createInteraccionesChatbotDto);
    const savedInteraccion = await createdInteraccion.save();
    return savedInteraccion;
  }

  async findAll(): Promise<Interacciones_Chatbots[]> {
    return this.interaccionesChatbotsModel.find().exec();
  }

  async findOne(id: string): Promise<Interacciones_Chatbots | null> {
    return this.interaccionesChatbotsModel.findById(id).exec();
  }

  async update(id: string, updateInteraccionesChatbotDto: UpdateInteraccionesChatbotDto): Promise<Interacciones_Chatbots | null> {
    return this.interaccionesChatbotsModel.findByIdAndUpdate(id, updateInteraccionesChatbotDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any> {
    return this.interaccionesChatbotsModel.findByIdAndDelete(id).exec();
  }
}
