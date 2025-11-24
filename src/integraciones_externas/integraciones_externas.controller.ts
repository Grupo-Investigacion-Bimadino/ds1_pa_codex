import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IntegracionesExternasService } from './integraciones_externas.service';
import { CreateIntegracionesExternaDto } from './dto/create-integraciones_externa.dto';
import { UpdateIntegracionesExternaDto } from './dto/update-integraciones_externa.dto';

@Controller('integraciones-externas')
export class IntegracionesExternasController {
  constructor(private readonly integracionesExternasService: IntegracionesExternasService) {}

  @Post()
  create(@Body() createIntegracionesExternaDto: CreateIntegracionesExternaDto) {
    return this.integracionesExternasService.create(createIntegracionesExternaDto);
  }

  @Get()
  findAll() {
    return this.integracionesExternasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.integracionesExternasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIntegracionesExternaDto: UpdateIntegracionesExternaDto) {
    return this.integracionesExternasService.update(id, updateIntegracionesExternaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.integracionesExternasService.remove(id);
  }
}
