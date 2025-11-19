import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComandosService } from './comandos.service';
import { CreateComandoDto } from './dto/create-comando.dto';
import { UpdateComandoDto } from './dto/update-comando.dto';

@Controller('comandos')
export class ComandosController {
  constructor(private readonly comandosService: ComandosService) {}

  @Post()
  create(@Body() createComandoDto: CreateComandoDto) {
    return this.comandosService.create(createComandoDto);
  }

  @Get()
  findAll() {
    return this.comandosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comandosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComandoDto: UpdateComandoDto) {
    return this.comandosService.update(id, updateComandoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comandosService.remove(id);
  }
}
