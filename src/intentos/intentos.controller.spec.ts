import { Test, TestingModule } from '@nestjs/testing';
import { IntentosController } from './intentos.controller';
import { IntentosService } from './intentos.service';

describe('IntentosController', () => {
  let controller: IntentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntentosController],
      providers: [IntentosService],
    }).compile();

    controller = module.get<IntentosController>(IntentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
