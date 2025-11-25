import { Test, TestingModule } from '@nestjs/testing';
import { RespuestasComandosService } from './respuestas_comandos.service';

describe('RespuestasComandosService', () => {
  let service: RespuestasComandosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RespuestasComandosService],
    }).compile();

    service = module.get<RespuestasComandosService>(RespuestasComandosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
