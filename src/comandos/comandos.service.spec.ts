import { Test, TestingModule } from '@nestjs/testing';
import { ComandosService } from './comandos.service';

describe('ComandosService', () => {
  let service: ComandosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComandosService],
    }).compile();

    service = module.get<ComandosService>(ComandosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
