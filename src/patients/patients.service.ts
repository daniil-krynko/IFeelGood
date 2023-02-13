import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Patient, PatientDocument } from "./schemas/patient.schema";
import { CreatePatientDto } from "./dto/create-patient.dto";

@Injectable()
export class PatientsService {
    constructor(@InjectModel('Patient') private patientModel: Model<PatientDocument>) {}

    async getPatients(): Promise<Patient[]> {
        return this.patientModel.find().exec();
    }

    async getPatientById(id: string): Promise<Patient> {
        return this.patientModel.findById(id).exec();
    }

    async createPatient(createPatientDto: CreatePatientDto): Promise<Patient> {
        return await this.patientModel.create(createPatientDto);
    }

    async updatePatient(id: string, updatePatientDto: CreatePatientDto): Promise<Patient> {
        return await this.patientModel.findByIdAndUpdate(id, updatePatientDto).exec();
    }

    async deletePatient(id: string) {
        return await this.patientModel.findByIdAndDelete({ _id: id }).exec();
    }
}
