import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgresosService } from './progresos.service';
import { CreateProgresoDto } from './dto/create-progreso.dto';
import { UpdateProgresoDto } from './dto/update-progreso.dto';

@Controller('progresos')
export class ProgresosController {
  constructor(private readonly progresosService: ProgresosService) {}

  @Post()
  create(@Body() createProgresoDto: CreateProgresoDto) {
    return this.progresosService.create(createProgresoDto);
  }

  @Get()
  findAll() {
    return this.progresosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.progresosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgresoDto: UpdateProgresoDto) {
    return this.progresosService.update(id, updateProgresoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.progresosService.remove(id);
  }
}
