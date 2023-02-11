import { Test, TestingModule } from '@nestjs/testing';
import { PsychotherapistsController } from './psychotherapists.controller';

describe('PsychotherapistsController', () => {
  let controller: PsychotherapistsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PsychotherapistsController],
    }).compile();

    controller = module.get<PsychotherapistsController>(PsychotherapistsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
