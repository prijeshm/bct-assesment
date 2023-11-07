import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Movie {
  @Prop()
  title: string;

  @Prop()
  genre: string;

  @Prop()
  language: string;

  @Prop()
  releaseDate: Date;

  @Prop()
  duration: number;

  @Prop()
  description: string;
}

export type MovieDocument = Movie & Document;
export const MovieSchema = SchemaFactory.createForClass(Movie);
