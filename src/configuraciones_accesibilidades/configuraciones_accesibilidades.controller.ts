import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfiguracionesAccesibilidadesService } from './configuraciones_accesibilidades.service';
import { CreateConfiguracionesAccesibilidadeDto } from './dto/create-configuraciones_accesibilidade.dto';
import { UpdateConfiguracionesAccesibilidadeDto } from './dto/update-configuraciones_accesibilidade.dto';

@Controller('configuraciones-accesibilidades')
export class ConfiguracionesAccesibilidadesController {
  constructor(private readonly configuracionesAccesibilidadesService: ConfiguracionesAccesibilidadesService) {}

  @Post()
  create(@Body() createConfiguracionesAccesibilidadeDto: CreateConfiguracionesAccesibilidadeDto) {
    return this.configuracionesAccesibilidadesService.create(createConfiguracionesAccesibilidadeDto);
  }

  @Get()
  findAll() {
    return this.configuracionesAccesibilidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configuracionesAccesibilidadesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConfiguracionesAccesibilidadeDto: UpdateConfiguracionesAccesibilidadeDto) {
    return this.configuracionesAccesibilidadesService.update(id, updateConfiguracionesAccesibilidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.configuracionesAccesibilidadesService.remove(id);
  }
}
