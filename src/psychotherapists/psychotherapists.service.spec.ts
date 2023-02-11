import { Test, TestingModule } from '@nestjs/testing';
import { PsychotherapistsService } from './psychotherapists.service';

describe('PsychotherapistsService', () => {
  let service: PsychotherapistsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PsychotherapistsService],
    }).compile();

    service = module.get<PsychotherapistsService>(PsychotherapistsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
