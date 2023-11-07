import mongoose, { Document, Model, Schema } from 'mongoose';

interface TheaterAttributes {
  name: string;
  city: string;
  address: string;
  capacity: number;
}

interface TheaterDocument extends TheaterAttributes, Document {}

interface TheaterModel extends Model<TheaterDocument> {}

const theaterSchema = new Schema<TheaterDocument, TheaterModel>({
  name: String,
  city: String,
  address: String,
  capacity: Number,
});

export default mongoose.model<TheaterDocument, TheaterModel>('theater', theaterSchema);
