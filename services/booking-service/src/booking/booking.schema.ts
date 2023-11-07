import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Customer } from '../schemas/customer.schema';
import { Showtime } from '../showtime/showtime.schema';
import { Movie } from '../schemas/movie.schema';
import { Theater } from '../schemas/theater.schema';

@Schema()
export class Booking {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Customer' }) // Reference to the Customer model
  customer: Customer; // Define the customer field as a reference

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Showtime' }) // Reference to the Showtime model
  showtime: Showtime;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Movie' })
  movie: Movie; // Use MovieDocument

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Theater' })
  theater: Theater; // Use TheaterDocument

  @Prop([Number]) // Define other properties
  seats: number[];

  @Prop()
  status: string;
}

export type BookingDocument = Booking & Document;
export const BookingSchema = SchemaFactory.createForClass(Booking);
