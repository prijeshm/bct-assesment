import mongoose, { ConnectOptions } from 'mongoose';

const mongoURI: string = 'mongodb://localhost:27017';

const connectOptions: ConnectOptions = {
  dbName: 'movie-catalog-service',
};

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, connectOptions);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

export default connectToDatabase;
