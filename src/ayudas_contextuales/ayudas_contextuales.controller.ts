import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AyudasContextualesService } from './ayudas_contextuales.service';
import { CreateAyudasContextualeDto } from './dto/create-ayudas_contextuale.dto';
import { UpdateAyudasContextualeDto } from './dto/update-ayudas_contextuale.dto';

@Controller('ayudas-contextuales')
export class AyudasContextualesController {
  constructor(private readonly ayudasContextualesService: AyudasContextualesService) {}

  @Post()
  create(@Body() createAyudasContextualeDto: CreateAyudasContextualeDto) {
    return this.ayudasContextualesService.create(createAyudasContextualeDto);
  }

  @Get()
  findAll() {
    return this.ayudasContextualesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ayudasContextualesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAyudasContextualeDto: UpdateAyudasContextualeDto) {
    return this.ayudasContextualesService.update(id, updateAyudasContextualeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ayudasContextualesService.remove(id);
  }
}
