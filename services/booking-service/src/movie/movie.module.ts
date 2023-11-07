import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from '../schemas/movie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Movie.name, // Model name
        schema: MovieSchema, // Schema for Movie
      },
    ]),
  ],
})
export class MovieModule {}
