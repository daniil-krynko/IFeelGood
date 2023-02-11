import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { PsychotherapistsModule } from './psychotherapists/psychotherapists.module';
import { SessionsModule } from './sessions/sessions.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    PatientsModule,
    PsychotherapistsModule,
    SessionsModule,
    MongooseModule.forRoot('mongodb+srv://admin:noadmin@cluster0.c6mlz99.mongodb.net/?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
