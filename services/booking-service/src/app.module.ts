import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { DatabaseModule } from './database/database.module';
import { CustomersModule } from './customer/customer.module';
import { ShowtimeModule } from './showtime/showtime.module';
import { MovieModule } from './movie/movie.module';
import { TheaterModule } from './theater/theater.module';

@Module({
  imports: [
    DatabaseModule,
    CustomersModule,
    ShowtimeModule,
    BookingModule,
    MovieModule,
    TheaterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
