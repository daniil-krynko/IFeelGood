import { CreatePsychotherapistDto } from "./create-psychotherapist.dto";

export class UpdatePsychotherapistDto extends CreatePsychotherapistDto {
    editedAt: Date;
}