import { Test, TestingModule } from '@nestjs/testing';
import { AyudasContextualesService } from './ayudas_contextuales.service';

describe('AyudasContextualesService', () => {
  let service: AyudasContextualesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AyudasContextualesService],
    }).compile();

    service = module.get<AyudasContextualesService>(AyudasContextualesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
