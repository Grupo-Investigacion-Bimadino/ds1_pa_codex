import { Test, TestingModule } from '@nestjs/testing';
import { AyudasContextualesController } from './ayudas_contextuales.controller';
import { AyudasContextualesService } from './ayudas_contextuales.service';

describe('AyudasContextualesController', () => {
  let controller: AyudasContextualesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AyudasContextualesController],
      providers: [AyudasContextualesService],
    }).compile();

    controller = module.get<AyudasContextualesController>(AyudasContextualesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
