import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { Session, SessionSchema } from "./schemas/session.schema";

@Module({
  imports: [MongooseModule.forFeature([{name: 'Session', schema: SessionSchema}])],
  providers: [SessionsService],
  controllers: [SessionsController]
})
export class SessionsModule {}
