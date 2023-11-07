// showtime.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShowtimeController } from './showtime.controller';
import { ShowtimeService } from './showtime.service';
import { Showtime, ShowtimeSchema } from './showtime.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Showtime.name, schema: ShowtimeSchema },
    ]),
  ],
  controllers: [ShowtimeController],
  providers: [ShowtimeService],
  exports: [ShowtimeService], // Export the service if needed
})
export class ShowtimeModule {}
