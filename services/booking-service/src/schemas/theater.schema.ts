import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Theater {
  @Prop()
  name: string;

  @Prop()
  city: string;

  @Prop()
  address: string;

  @Prop()
  capacity: number;
}

export type TheaterDocument = Theater & Document;
export const TheaterSchema = SchemaFactory.createForClass(Theater);
