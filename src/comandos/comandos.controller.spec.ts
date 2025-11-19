import { Test, TestingModule } from '@nestjs/testing';
import { ComandosController } from './comandos.controller';
import { ComandosService } from './comandos.service';

describe('ComandosController', () => {
  let controller: ComandosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComandosController],
      providers: [ComandosService],
    }).compile();

    controller = module.get<ComandosController>(ComandosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
