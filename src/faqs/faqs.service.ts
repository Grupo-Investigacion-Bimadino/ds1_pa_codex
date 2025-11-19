import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { Faqs, FaqsDocument } from './schemas/faqs.schema';

@Injectable()
export class FaqsService {

  constructor(@InjectModel(Faqs.name) private faqModel: Model<FaqsDocument>) {}

  async create(createFaqDto: CreateFaqDto): Promise<Faqs> {
    const createdFaq = new this.faqModel(createFaqDto);
    const savedFaq = await createdFaq.save();
    return savedFaq;
  }

  async findAll(): Promise<Faqs[]> {
    return this.faqModel.find().exec();
  }

  async findOne(id: string): Promise<Faqs | null> {
    return this.faqModel.findById(id).exec();
  }

  async update(id: string, updateFaqDto: UpdateFaqDto): Promise<Faqs | null> {
    return this.faqModel.findByIdAndUpdate(id, updateFaqDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any | null> {
    return this.faqModel.findByIdAndDelete(id).exec();
  }  
  
}
