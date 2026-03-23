import { Test, TestingModule } from '@nestjs/testing';
import { HealthStatusController } from './health-status.controller';
import { HealthStatusService } from './health-status.service';

describe('HealthStatusController', () => {
  let controller: HealthStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthStatusController],
      providers: [{ provide: HealthStatusService, useValue: {} }],
    }).compile();

    controller = module.get<HealthStatusController>(HealthStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
