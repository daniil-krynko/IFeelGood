import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from "mongoose";

export type PatientDocument = HydratedDocument<Patient>;

@Schema()
export class Patient {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    surname: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true })
    bankcard: string;

    @Prop()
    birthdate: Date;

    @Prop()
    email: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);