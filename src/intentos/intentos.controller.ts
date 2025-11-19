import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IntentosService } from './intentos.service';
import { CreateIntentoDto } from './dto/create-intento.dto';
import { UpdateIntentoDto } from './dto/update-intento.dto';

@Controller('intentos')
export class IntentosController {
  constructor(private readonly intentosService: IntentosService) {}

  @Post()
  create(@Body() createIntentoDto: CreateIntentoDto) {
    return this.intentosService.create(createIntentoDto);
  }

  @Get()
  findAll() {
    return this.intentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intentosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIntentoDto: UpdateIntentoDto) {
    return this.intentosService.update(id, updateIntentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intentosService.remove(id);
  }
}
