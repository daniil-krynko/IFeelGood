export class CreatePatientDto {
    name: string;
    surname: string;
    phone: string;
    password: string;
    bankcard: string;
    birthdate?: Date;
    email?: string;
    refreshToken?: string;
}
