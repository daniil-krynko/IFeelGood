import { Controller, Param, Body, Get, Post, Put, Delete } from '@nestjs/common';
import { SessionsService } from "./sessions.service";
import { CreateSessionDto } from "./dto/create-session.dto";
import { UpdateSessionDto } from "./dto/update-session.dto";
import { Session } from "./schemas/session.schema";

@Controller('sessions')
export class SessionsController {
    constructor(private sessionsService: SessionsService) {}

    @Get()
    async getSessions(): Promise<Session[]> {
        return this.sessionsService.findAllSessions();
    }

    @Get(':_id')
    async getSessionById(@Param('_id') id: string) {
        return this.sessionsService.findSessionById(id);
    }

    @Post()
    async createSession(@Body() createSessionDto: CreateSessionDto) {
        await this.sessionsService.newSession(createSessionDto);
    }

    @Put(':_id')
    async updateSession(@Param('_id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
        return await this.sessionsService.editSession(id, updateSessionDto);
    }

    @Delete(':_id')
    async deleteSession(@Param('_id') id: string) {
        return this.sessionsService.removeSession(id);
    }
}
