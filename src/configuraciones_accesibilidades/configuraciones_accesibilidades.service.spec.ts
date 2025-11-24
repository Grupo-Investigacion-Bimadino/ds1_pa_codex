import { Test, TestingModule } from '@nestjs/testing';
import { ConfiguracionesAccesibilidadesService } from './configuraciones_accesibilidades.service';

describe('ConfiguracionesAccesibilidadesService', () => {
  let service: ConfiguracionesAccesibilidadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfiguracionesAccesibilidadesService],
    }).compile();

    service = module.get<ConfiguracionesAccesibilidadesService>(ConfiguracionesAccesibilidadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
