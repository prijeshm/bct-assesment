// booking.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './booking.schema';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  create(@Body() bookingData: Booking) {
    return this.bookingService.createBooking(bookingData);
  }

  @Get()
  findAll() {
    return this.bookingService.findAllBookings();
  }
}
