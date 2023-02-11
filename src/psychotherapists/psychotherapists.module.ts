import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { PsychotherapistsService } from './psychotherapists.service';
import { PsychotherapistsController } from './psychotherapists.controller';
import { Psychotherapist, PsychotherapistSchema } from "./schemas/psychotherapist.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Psychotherapist', schema: PsychotherapistSchema}])],
  providers: [PsychotherapistsService],
  controllers: [PsychotherapistsController]
})
export class PsychotherapistsModule {}
