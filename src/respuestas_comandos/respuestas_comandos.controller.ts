import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RespuestasComandosService } from './respuestas_comandos.service';
import { CreateRespuestasComandoDto } from './dto/create-respuestas_comando.dto';
import { UpdateRespuestasComandoDto } from './dto/update-respuestas_comando.dto';

@Controller('respuestas-comandos')
export class RespuestasComandosController {
  constructor(private readonly respuestasComandosService: RespuestasComandosService) {}

  @Post()
  create(@Body() createRespuestasComandoDto: CreateRespuestasComandoDto) {
    return this.respuestasComandosService.create(createRespuestasComandoDto);
  }

  @Get()
  findAll() {
    return this.respuestasComandosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.respuestasComandosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRespuestasComandoDto: UpdateRespuestasComandoDto) {
    return this.respuestasComandosService.update(id, updateRespuestasComandoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.respuestasComandosService.remove(id);
  }
}
