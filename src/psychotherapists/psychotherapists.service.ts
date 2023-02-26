import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Psychotherapist, PsychotherapistDocument } from "./schemas/psychotherapist.schema";
import { CreatePsychotherapistDto } from "./dto/create-psychotherapist.dto";

@Injectable()
export class PsychotherapistsService {
    constructor(@InjectModel('Psychotherapist') private psychotherapistModel: Model<PsychotherapistDocument>) {}

    async getAllPsychotherapists(): Promise<Psychotherapist[]> {
        return this.psychotherapistModel.find().exec();
    }

    async getPsychotherapistById(id: string): Promise<Psychotherapist> {
        return this.psychotherapistModel.findById(id).exec();
    }

    async newPsychotherapist(createPatientDto: CreatePsychotherapistDto): Promise<Psychotherapist> {
        return await this.psychotherapistModel.create(createPatientDto);
    }

    async updatePsychotherapist(id: string, updatePsychotherapistDto: CreatePsychotherapistDto): Promise<Psychotherapist> {
        return await this.psychotherapistModel.findByIdAndUpdate(id, updatePsychotherapistDto).exec();
    }

    async removePsychotherapist(id: string) {
        return await this.psychotherapistModel.findByIdAndDelete({ _id: id }).exec();
    }
}