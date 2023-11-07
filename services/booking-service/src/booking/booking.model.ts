import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Booking {
  @Prop()
  movie: string;

  @Prop()
  theater: string;

  @Prop()
  showtime: string;

  @Prop()
  seats: string[];
}

export type BookingDocument = Booking & Document;

export const BookingSchema = SchemaFactory.createForClass(Booking);
