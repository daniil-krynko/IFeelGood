import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Patient, PatientDocument } from "./schemas/patient.schema";
import { CreatePatientDto } from "./dto/create-patient.dto";
import { UpdatePatientDto } from "./dto/update-patient.dto";

@Injectable()
export class PatientsService {
    constructor(@InjectModel('Patient') private patientModel: Model<PatientDocument>) {}

    async getPatients(): Promise<PatientDocument[]> {
        return this.patientModel.find().exec();
    }

    async getPatientById(id: string): Promise<PatientDocument> {
        return this.patientModel.findById(id).exec();
    }

    async getPatientByPhone(phone: string): Promise<PatientDocument> {
        return this.patientModel.findOne({ phone }).exec();
    }

    async createPatient(createPatientDto: CreatePatientDto): Promise<PatientDocument> {
        return await (await this.patientModel.create(createPatientDto)).save();
    }

    async updatePatient(id: string, updatePatientDto: UpdatePatientDto): Promise<PatientDocument> {
        return await (await this.patientModel.findByIdAndUpdate(id, updatePatientDto).exec()).save();
    }

    async deletePatient(id: string) {
        return await this.patientModel.findByIdAndDelete({ _id: id }).exec();
    }
}
