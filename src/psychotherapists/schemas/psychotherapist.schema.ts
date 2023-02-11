import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from "mongoose";

export type PsychotherapistDocument = HydratedDocument<Psychotherapist>;

@Schema()
export class Psychotherapist {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    surname: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true })
    bankcard: string;

    @Prop({ required: true })
    certificate: string;

    @Prop()
    birthdate: Date;

    @Prop()
    email: string;
}

export const PsychotherapistSchema = SchemaFactory.createForClass(Psychotherapist);