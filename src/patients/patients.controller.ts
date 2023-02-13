import { Controller, Param, Body, Get, Post, Put, Delete } from '@nestjs/common';
import { PatientsService } from "./patients.service";
import { CreatePatientDto } from "./dto/create-patient.dto";
import { UpdatePatientDto } from "./dto/update-patient.dto";
import { Patient } from "./schemas/patient.schema";

@Controller('patients')
export class PatientsController {
    constructor(private patientsService: PatientsService) {}
    @Get()
    async getPatients(): Promise<Patient[]> {
        return this.patientsService.getPatients();
    }

    @Get(':_id')
    async getPatientById(@Param('_id') id: string) {
        return this.patientsService.getPatientById(id);
    }

    @Post()
    async createPatient(@Body() createPatientDto: CreatePatientDto) {
        await this.patientsService.createPatient(createPatientDto);
    }

    @Put(':_id')
    async updatePatient(@Param('_id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
        return await this.patientsService.updatePatient(id, updatePatientDto);
    }

    @Delete(':_id')
    async deletePatient(@Param('_id') id: string) {
        return this.patientsService.deletePatient(id);
    }
}
