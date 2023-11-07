import mongoose, { Document, Model, Schema } from 'mongoose';

interface MovieAttributes {
  title: string;
  genre: string;
  language: string;
  releaseDate: Date;
  duration: number;
  description: string;
}

interface MovieDocument extends MovieAttributes, Document {}

interface MovieModel extends Model<MovieDocument> {}

const movieSchema = new Schema<MovieDocument, MovieModel>({
  title: String,
  genre: String,
  language: String,
  releaseDate: Date,
  duration: Number,
  description: String,
});

export default mongoose.model<MovieDocument, MovieModel>('movies', movieSchema);
