import { Test, TestingModule } from '@nestjs/testing';
import { UserManagementService } from './user-management.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UserManagementService', () => {
  let service: UserManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserManagementService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    service = module.get<UserManagementService>(UserManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  }); 
});