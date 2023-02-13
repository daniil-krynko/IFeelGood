import { CreatePatientDto } from "../../patients/dto/create-patient.dto";
import { CreatePsychotherapistDto } from "../../psychotherapists/dto/create-psychotherapist.dto";

export class CreateSessionDto {
    patient: CreatePatientDto;
    psychotherapist: CreatePsychotherapistDto;
    start: Date;
    end: Date;
    price: number;
    description: string;
}
