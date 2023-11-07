import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Movie } from '../schemas/movie.schema'; // Import Movie schema
import { Theater } from '../schemas/theater.schema'; // Import Theater schema

@Schema()
export class Showtime {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Movie' })
  movie: Movie; // Use MovieDocument

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Theater' })
  theater: Theater; // Use TheaterDocument

  @Prop()
  showtime: Date;

  @Prop()
  ticketPrice: number;

  @Prop()
  availableSeats: number;
}

export type ShowtimeDocument = Showtime & Document;
export const ShowtimeSchema = SchemaFactory.createForClass(Showtime);
