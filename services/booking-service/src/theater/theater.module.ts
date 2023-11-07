import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Theater, TheaterSchema } from '../schemas/theater.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Theater.name, // Model name
        schema: TheaterSchema, // Schema for Theater
      },
    ]),
  ],
})
export class TheaterModule {}
