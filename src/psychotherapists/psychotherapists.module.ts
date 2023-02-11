import { Module } from '@nestjs/common';
import { PsychotherapistsService } from './psychotherapists.service';
import { PsychotherapistsController } from './psychotherapists.controller';

@Module({
  providers: [PsychotherapistsService],
  controllers: [PsychotherapistsController]
})
export class PsychotherapistsModule {}
