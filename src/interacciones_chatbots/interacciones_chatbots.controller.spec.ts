import { Test, TestingModule } from '@nestjs/testing';
import { InteraccionesChatbotsController } from './interacciones_chatbots.controller';
import { InteraccionesChatbotsService } from './interacciones_chatbots.service';

describe('InteraccionesChatbotsController', () => {
  let controller: InteraccionesChatbotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InteraccionesChatbotsController],
      providers: [InteraccionesChatbotsService],
    }).compile();

    controller = module.get<InteraccionesChatbotsController>(InteraccionesChatbotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
