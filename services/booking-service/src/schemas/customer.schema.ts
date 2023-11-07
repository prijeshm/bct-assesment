import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Customer {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;
}

export type CustomerDocument = Customer & Document;
export const CustomerSchema = SchemaFactory.createForClass(Customer);
