import { Test, TestingModule } from '@nestjs/testing';
import { ProgresosController } from './progresos.controller';
import { ProgresosService } from './progresos.service';

describe('ProgresosController', () => {
  let controller: ProgresosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgresosController],
      providers: [ProgresosService],
    }).compile();

    controller = module.get<ProgresosController>(ProgresosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
