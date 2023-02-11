import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import * as mongoose from "mongoose";
import { Patient } from "../../patients/schemas/patient.schema";
import { Psychotherapist } from "../../psychotherapists/schemas/psychotherapist.schema";

export type SessionDocument = HydratedDocument<Session>;

@Schema()
export class Session {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Patient" })
    patient: Patient;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Psychotherapist" })
    psychotherapist: Psychotherapist;

    @Prop({ required: true })
    start: Date;

    @Prop({ required: true })
    end: Date;

    @Prop({ required: true })
    price: number;

    @Prop()
    description: string;
}

export const SessionSchema = SchemaFactory.createForClass(Session);