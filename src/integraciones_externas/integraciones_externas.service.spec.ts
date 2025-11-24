import { Test, TestingModule } from '@nestjs/testing';
import { IntegracionesExternasService } from './integraciones_externas.service';

describe('IntegracionesExternasService', () => {
  let service: IntegracionesExternasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntegracionesExternasService],
    }).compile();

    service = module.get<IntegracionesExternasService>(IntegracionesExternasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
