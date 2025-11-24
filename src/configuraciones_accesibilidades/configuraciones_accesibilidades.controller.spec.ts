import { Test, TestingModule } from '@nestjs/testing';
import { ConfiguracionesAccesibilidadesController } from './configuraciones_accesibilidades.controller';
import { ConfiguracionesAccesibilidadesService } from './configuraciones_accesibilidades.service';

describe('ConfiguracionesAccesibilidadesController', () => {
  let controller: ConfiguracionesAccesibilidadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfiguracionesAccesibilidadesController],
      providers: [ConfiguracionesAccesibilidadesService],
    }).compile();

    controller = module.get<ConfiguracionesAccesibilidadesController>(ConfiguracionesAccesibilidadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
