import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Session, SessionDocument } from "./schemas/session.schema"
import { CreateSessionDto } from "./dto/create-session.dto";
import { UpdateSessionDto } from "./dto/update-session.dto";

@Injectable()
export class SessionsService {
    constructor(@InjectModel('Session') private sessionModel: Model<SessionDocument>) {}

    async getAllSessions(): Promise<Session[]> {
        return this.sessionModel.find().exec();
    }

    async getSessionById(id: string): Promise<Session> {
        return this.sessionModel.findById(id).exec();
    }

    async createSession(createSessionDto: CreateSessionDto): Promise<Session> {
        console.log("Krynko");
        return await this.sessionModel.create(createSessionDto);
    }

    async updateSession(id: string, updateSessionDto: CreateSessionDto): Promise<Session> {
        return await this.sessionModel.findByIdAndUpdate(id, updateSessionDto).exec();
    }

    async deleteSession(id: string) {
        return await this.sessionModel.findByIdAndDelete({ _id: id }).exec();
    }
}