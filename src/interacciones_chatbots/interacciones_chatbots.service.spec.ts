import { Test, TestingModule } from '@nestjs/testing';
import { InteraccionesChatbotsService } from './interacciones_chatbots.service';

describe('InteraccionesChatbotsService', () => {
  let service: InteraccionesChatbotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InteraccionesChatbotsService],
    }).compile();

    service = module.get<InteraccionesChatbotsService>(InteraccionesChatbotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
