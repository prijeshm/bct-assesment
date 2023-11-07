import mongoose, { Document, Model, Schema } from 'mongoose';

interface ShowtimeAttributes {
  movie: mongoose.Types.ObjectId; // Reference to the Movie
  theater: mongoose.Types.ObjectId; // Reference to the Theater
  time: Date;
  capacity: number;
}

interface ShowtimeDocument extends ShowtimeAttributes, Document {}

interface ShowtimeModel extends Model<ShowtimeDocument> {}

const showtimeSchema = new Schema<ShowtimeDocument, ShowtimeModel>({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'movies',
    required: true,
  },
  theater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'theater',
    required: true,
  },
  time: Date,
  capacity: Number,
});

export default mongoose.model<ShowtimeDocument, ShowtimeModel>('Showtime', showtimeSchema);
