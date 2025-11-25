import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InteraccionesChatbotsService } from './interacciones_chatbots.service';
import { CreateInteraccionesChatbotDto } from './dto/create-interacciones_chatbot.dto';
import { UpdateInteraccionesChatbotDto } from './dto/update-interacciones_chatbot.dto';

@Controller('interacciones-chatbots')
export class InteraccionesChatbotsController {
  constructor(private readonly interaccionesChatbotsService: InteraccionesChatbotsService) {}

  @Post()
  create(@Body() createInteraccionesChatbotDto: CreateInteraccionesChatbotDto) {
    return this.interaccionesChatbotsService.create(createInteraccionesChatbotDto);
  }

  @Get()
  findAll() {
    return this.interaccionesChatbotsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interaccionesChatbotsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInteraccionesChatbotDto: UpdateInteraccionesChatbotDto) {
    return this.interaccionesChatbotsService.update(id, updateInteraccionesChatbotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interaccionesChatbotsService.remove(id);
  }
}
