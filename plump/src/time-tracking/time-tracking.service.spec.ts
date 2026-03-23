import { Test, TestingModule } from '@nestjs/testing';
import { TimeTrackingService } from './time-tracking.service';
import { PrismaService } from '../prisma/prisma.service';

describe('TimeTrackingService', () => {
  let service: TimeTrackingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TimeTrackingService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    service = module.get<TimeTrackingService>(TimeTrackingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
