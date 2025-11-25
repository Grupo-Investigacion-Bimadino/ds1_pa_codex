import { Test, TestingModule } from '@nestjs/testing';
import { RespuestasComandosController } from './respuestas_comandos.controller';
import { RespuestasComandosService } from './respuestas_comandos.service';

describe('RespuestasComandosController', () => {
  let controller: RespuestasComandosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RespuestasComandosController],
      providers: [RespuestasComandosService],
    }).compile();

    controller = module.get<RespuestasComandosController>(RespuestasComandosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
