import { Test, TestingModule } from '@nestjs/testing';
import { IntegracionesExternasController } from './integraciones_externas.controller';
import { IntegracionesExternasService } from './integraciones_externas.service';

describe('IntegracionesExternasController', () => {
  let controller: IntegracionesExternasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntegracionesExternasController],
      providers: [IntegracionesExternasService],
    }).compile();

    controller = module.get<IntegracionesExternasController>(IntegracionesExternasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
